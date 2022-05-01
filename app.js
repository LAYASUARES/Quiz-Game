 const buttonStart = document.getElementById("start-btn");
 const buttonNext = document.getElementById("next-btn");
 const perguntaContainerElement = document.getElementById("pergunta-container")
 const perguntaElement = document.getElementById("pergunta");
 const respostasButtonsELement = document.getElementById("resposta-buttons")


 //Nós n queremos que a nossas perguntas apareçam na mesma ordem sempre
 let embaralharPerguntas, perguntaLocalIndex

 buttonStart.addEventListener("click", comecarJogo)
 buttonNext.addEventListener("click", function(){
      perguntaLocalIndex++
      setProximaPergunta()
 })


//Construindo o "Começar" do Jogo
function comecarJogo(){
     console.log("Começar");
     buttonStart.classList.add("hide");
     embaralharPerguntas = perguntas.sort(() => Math.random() - .5 )//O método sort() permite classificar (ordenar) elementos de um array local. Além de retornar o array ordenado, o método sort() altera as posições dos elementos no array original.Sort- se for um numero negativo, ele muda pra positivo e visse versa
     perguntaContainerElement.classList.remove("hide");
     perguntaLocalIndex = 0;
     setProximaPergunta();

}

//A função responsavel por colocar a nossa proxima pergunta, quer dizer o que acontece qdo clico no botão de proxima
function setProximaPergunta() {
     resertar()
     mostrarPergunta(embaralharPerguntas[perguntaLocalIndex])
}

function mostrarPergunta(pergunta){
     perguntaElement.innerText = pergunta.pergunta
     //Um loop para nossa respostas não estarem sempre no mesmo lugar
     pergunta.respostas.forEach(function(resposta) {
          const button = document.createElement("button");
          button.innerText = resposta.text
          button.classList.add("btn");
          if(resposta.correct){//Só se o botão estiver correcto
               button.dataset.correct = resposta.correct//A datasetpropriedade somente leitura da HTMLElementinterface fornece acesso de leitura/gravação a atributos de dados personalizados ( data-*) em elementos. Ele expõe um mapa de strings ( DOMStringMap) com uma entrada para cada data-*atributo.
          }
          button.addEventListener("click", selecionarResposta)
          respostasButtonsELement.appendChild(button)
     });
}

//Pra limpar as respostas que não deviam estar ai, tipo antigas. E isso irá fazer com que volte, ou reste tudo, pergunta, o nosso body, tudo para o seu estado default, senpre que vir uma nova pergunta
function resertar() {
     clearStatusClass(document.body)
     buttonNext.classList.add("hide");
     while(respostasButtonsELement.firstChild){
          respostasButtonsELement.removeChild(respostasButtonsELement.firstChild)
     }
}

//Função responsavel pela ação de qdo nós escolher uma resposta
function selecionarResposta(e){
     const selectedButton = e.target
     const correct = selectedButton.dataset.correct
     //Colocar o StatusClass no nosso body
     setStatusClass(document.body, correct)
     Array.from(respostasButtonsELement.children).forEach(function(button){//Usamos um array ou convertemos, porque estava retornando um, e se atualizava por si, então convertemos pra poder usar com um loop de forEach 
          setStatusClass(button, button.dataset.correct)
     })
     if(embaralharPerguntas.length > perguntaLocalIndex +1){
          buttonNext.classList.remove("hide")
     }else{
         buttonStart.innerText = "Recomeçar"
         buttonStart.classList.remove("hide")
     }
     
}

function setStatusClass(element, correct){
     clearStatusClass(element);
     if(correct){
        element.classList.add("correct") 
     }else{
          element.classList.add("wrong") 
     }
}

function clearStatusClass(element){
     element.classList.remove("correct");
     element.classList.remove("wrong")
}

//Lista de perguntas e respostas, que iá swer inicializado como um array, com um object das perguntas dentro
const perguntas = [
     {
          pergunta: "Laranja é uma cor ou uma Fruta?",
          respostas: [
               {text:"Os dois", correct: true},
               {text:"Cor", correct: false},
               {text:"Fruta", correct: false},
               {text:"Nenhuma", correct: false}
          ]

     },
     {
          pergunta: "Qual é o Rei da Horta?",
          respostas: [
               {text:"O Rei-Polho", correct: true},
               {text:"O tomate", correct: false},
               {text:"O Maboque", correct: false},
               {text:"Uma Horta só tem Rainha", correct: false}
          ]

     },
     {
          pergunta: "O que se coloca numa torradeira?",
          respostas: [
               {text:"Pão", correct: true},
               {text:"Bife", correct: false},
               {text:"Torrada", correct: false},
               {text:"Carvão", correct: false}
          ]

     },
     {
          pergunta: "O pai da Joana tem 5 filhas, a Segunda, a Terça, a Quarta e a Quinta, qual o nome da quinta?",
          respostas: [
               {text:"Joana", correct: true},
               {text:"Sexta", correct: false},
               {text:"Penta", correct: false},
               {text:"Lurdes", correct: false}
          ]

     },
     {
          pergunta: "Quantas vezes é possível dobrar ao meio um folha de papel de tamanho A4?",
          respostas: [
               {text:"1", correct: true},
               {text:"4", correct: false},
               {text:"7", correct: false},
               {text:"2", correct: false}
          ]

     },
     {
          pergunta: "Existem 6 maças em cima de uma mesa e tu tiras 4, com quantas ficas?",
          respostas: [
               {text:"4", correct: true},
               {text:"10", correct: false},
               {text:"2", correct: false},
               {text:"6", correct: false}
          ]

     },
     {
          pergunta: "Estão 8 pessoas sentadas num sofá, 3 pernas partem e 6 pessoas saem. Quantas pernas restam?",
          respostas: [
               {text:"5", correct: true},
               {text:"4", correct: false},
               {text:"1", correct: false},
               {text:"6", correct: false}
          ]

     },
     {
          pergunta: "Qual a quantidade de terra (em metros cúbicos) consegues tirar de dentro de um buraco com 2 metros de largura, 3 de comprimento de 5 de altura?",
          respostas: [
               {text:"0 metros cúbicos", correct: true},
               {text:"20 metros cúbicos", correct: false},
               {text:"30 metros cúbicos", correct: false},
               {text:"35 metros cúbicos", correct: false}
          ]

     },
     {
          pergunta: "Quantas vezes é possível subtrair 10 a 100?",
          respostas: [
               {text:"1", correct: true},
               {text:"9", correct: false},
               {text:"6", correct: false},
               {text:"10", correct: false}
          ]

     },
     {
          pergunta: "Entras numa sala escura e fria onde tens uma lareira, uma vela e uma tocha. Qual acendes primeiro?",
          respostas: [
               {text:"Um fosforo", correct: true},
               {text:"A vela", correct: false},
               {text:"A tocha", correct: false},
               {text:"A lareira", correct: false}
          ]

     },
     {
          pergunta: "Apontando para um retrato, um homem diz: 'Não tenho irmãos ou imãs, mas o pai daquele homem é filho do meu pai.' Para quem está o homem a apontar?",
          respostas: [
               {text:"Filho", correct: true},
               {text:"Ele próprio", correct: false},
               {text:"Pai", correct: false},
               {text:"Irmão", correct: false}
          ]

     },
     {
          pergunta: "Segundo as leis da física, qual o nome da força de atracção que existe entre objectos com massa (como partículas planetas e outros objectos cósmicos)?",
          respostas: [
               {text:"Gravidade", correct: true},
               {text:"Amor", correct: false},
               {text:"Força nuclear fraca", correct: false},
               {text:"Força nuclear forte", correct: false}
          ]

     },
     {
          pergunta: "Quanto tempo leva a Terra a completar uma volta sobre si mesma?",
          respostas: [
               {text:"24 horas", correct: true},
               {text:"365 dias", correct: false},
               {text:"31 dias", correct: false},
               {text:"12 horas", correct: false}
          ]

     },
     {
          pergunta: "O que é que é mais pesado, 100kg de ferro ou 100 kg de algodão?",
          respostas: [
               {text:"Ambos pesam o mesmo", correct: true},
               {text:"O ferro", correct: false},
               {text:"O algodão", correct: false},
               {text:"Nenhuma dos dois", correct: false}
          ]

     },
     {
          pergunta: "Se 8 homens demoraram 10 horas para construir um muro, quantas hora levariam 4 homens para construir o mesmo muro?",
          respostas: [
               {text:"0 horas", correct: true},
               {text:"30 horas", correct: false},
               {text:"20 horas", correct: false},
               {text:"10 horas", correct: false}
          ]

     },
]