"use strict";

const select = document.querySelector(".select");
const btn = document.querySelector(".js-btn");
const outputMsg = document.querySelector(".js-message");
const totalPlayerScore = document.querySelector(".js-player");
const totalCompScore = document.querySelector(".js-comp");
const resetBtn = document.querySelector(".js-reset");
const playerHasChosen = document.querySelector(".player-choice");
const compHasChosen = document.querySelector(".computer-choice");



//generador num random
function getRandomNumber(max) {
    max = 9;
    return Math.ceil(Math.random() * max);
}

//obtener valor input
function inputPlayer(){
    return select.value;
};

//comprobar num random y asignale una jugada
function computerPlay(){
    const number = getRandomNumber();
    let compPlay;
    
    if (number <= 3){
        console.log("piedra");
        compPlay = "piedra";
    } else if (number >= 7){
        console.log("papel");
        compPlay = "papel";
    } else{
        console.log("tijera");
        compPlay = "tijera";
    };
    return compPlay;
};

let finalCompScore= 0;
let finalPlayerScore = 0;

//This will update scores
function updateScores(){
    totalPlayerScore.innerHTML = finalPlayerScore;
    totalCompScore.innerHTML = finalCompScore;
};

//comparar jugadas + update scores
function comparePlays(){
    const playerChoice = inputPlayer();
    const computerChoice = computerPlay();
    if (playerChoice === 'piedra' && computerChoice === 'piedra'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = 'Empate';
    } else if (playerChoice === 'piedra' && computerChoice === 'papel'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = '¡Has perdido!';
        finalCompScore++;
    } else if (playerChoice === 'piedra' && computerChoice === 'tijera'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = '¡Has ganado!';
        finalPlayerScore++;
    } else if (playerChoice === 'papel' && computerChoice === 'papel'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = 'Empate';
    } else if (playerChoice === 'papel' && computerChoice === 'tijera'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = '¡Has perdido!';
        finalCompScore++;
    } else if (playerChoice === 'papel' && computerChoice === 'piedra'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = '¡Has ganado!';
        finalPlayerScore++;
    } else if (playerChoice === 'tijera' && computerChoice === 'tijera'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = 'Empate';
    } else if (playerChoice === 'tijera' && computerChoice === 'piedra'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = '¡Has perdido!';
        finalCompScore++;
    } else if (playerChoice === 'tijera' && computerChoice === 'papel'){
        console.log("funciona");
        playerHasChosen.innerHTML = `Has elegido: ` + playerChoice;
        compHasChosen.innerHTML = `La Computadora ha elegido: ` + computerChoice;
        outputMsg.innerHTML = '¡Has ganado!';
        finalPlayerScore++;
    };
    updateScores();
};

const handleReset = (event) =>{
    event.preventDefault();
    resetBtn.classList.add('hidden');
    totalPlayerScore.innerHTML = "0";
    totalCompScore.innerHTML = "0";
    outputMsg.innerHTML = "Vamos a jugar!";
    btn.classList.remove('hidden');
    let finalCompScore= 0;
    let finalPlayerScore = 0;
    playerHasChosen.innerHTML = "";
    compHasChosen.innerHTML = "";
};

//button count
let btnCount = 0;

function stopBtn(){
    btnCount++;
    console.log('button count is ' +btnCount);
    if (btnCount === 10){
        btn.classList.add("hidden");
        resetBtn.classList.remove("hidden");
        
        if (finalPlayerScore > finalCompScore){
            outputMsg.innerHTML = "¡Has ganado la partida!";
        } else if (finalPlayerScore < finalCompScore){
            outputMsg.innerHTML = "¡Has perdido la partida!";
        } else {
            outputMsg.innerHTML = "Has empatado contra la Computadora";
        };
        btnCount = 0;
        console.log('button count is now ' + btnCount);
    };
};

function handleClick(event){
    event.preventDefault();
    comparePlays(); 
    stopBtn();
};

btn.addEventListener('click', handleClick);

resetBtn.addEventListener ('click', handleReset);

