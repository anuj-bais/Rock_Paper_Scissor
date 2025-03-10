let userScore = 0;
let compScore = 0;
let audioTing = new Audio("ting.mp3")
let gameDraw = new Audio("gameDraw.mp3")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compOption = document.querySelector("#compOption");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

// User Choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =  choice.getAttribute("id");
        playGame(userChoice);
        
    });
});

// Computer Choice
const gencompChoice = () =>{
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

// Play Game
const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerHTML = "Game Was Draw <br> Play Again...!"
    msg.style.backgroundColor = "#081b31";
    compOption.innerText = `Choose Same...!!`;
    gameDraw.play();
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        audioTing.play();
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win !!")
        msg.innerText = "You Win..!"
        msg.style.backgroundColor = "green";
        compOption.innerText = `Your's ${userChoice} Beats ${compChoice}`;
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose !!")
        msg.innerText = "You Lose..!"
        msg.style.backgroundColor = "red";
        compOption.innerText = `${compChoice} Beats Your's ${userChoice}`;
    }
}; 

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
    compOption.innerText = "";
});