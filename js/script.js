let order = []
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//sorteio de números entre 0 e 3, cria ordem aleatório
let shuffleOrder = () => {

    //variàvel que grava um número aleatório a cada rodada
    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;
    clickedOrder = [];

    //liga a cor do número sorteado
    for(let i in order){

        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number[i] + 1)
    
    }
}

//acende a próxima cor
let ligthColor = (element, number) => {
     
    number = number * 500 ;
    setTimeout(() => {
       
        element.classList.add('selected');
    }, number - 250);

    //remove a classe por um tempo
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () =>{

    for(let i  in clickedOrder){
       if(clickedOrder[i] != order[i]){
           gameOver();
           break;
       }
    }

    if(clickedOrder.length == order.length){

        alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo nível`)
        nextLevel();
    }
}

//função para o click do usuário
let click = (color) =>{

    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
 

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

    
}

//função que reotorna nossa cor
let  createColorElement = (color) => {

    if(color == 0){
        return green;
    
    }else if(color == 1){
        return red;
      
    }else if(color == 2){
        return yellow;
       
    }else if(color == 3){
        return blue;
      
    }
}

//função para próximo nível do jogo

let nextLevel = () => {
    
    score++;
    shuffleOrder();
}

//funçao para game over
let gameOver = () =>{
    
    alert(`Pontuação: ${score}!\n Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];

    playGame();
}

//função de início do jogo
let playGame = () => {
   
    alert('Bem vindo ao Gênises! Iniciando novo jogo!')
    score = 0;

    nextLevel();

}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//início do jogo
playGame();



