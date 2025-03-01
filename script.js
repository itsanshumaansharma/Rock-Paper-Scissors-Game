let userNameElement = document.querySelector("#name");
let names = prompt("Enter Your Name: ");
userNameElement.innerText = `${names}`;

let userScore = 0;
let compScore = 0;
let userChoice;
let comChoice;

const choices = document.querySelectorAll(".choice");
const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");
let message = document.querySelector("#msg");

// Random Choice Generator
const genComputerChoice = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
};

// Selecting User Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Draw Game Function
const drawGame = (userChoice, comChoice) => {
    if (userChoice === comChoice) {
        message.innerHTML = `OOPS! Game Draw. ${names} choose ${userChoice} & Computer choose ${comChoice}`;
        message.style.backgroundColor = "gray";
    }
};

// Show Winner
const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScoreElement.innerText = userScore;
        message.innerHTML = `${names} Wins! ${names} choose ${userChoice} & Computer choose ${comChoice}`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreElement.innerText = compScore;
        message.innerHTML = `${names} Loses! ${names} choose ${userChoice} & Computer choose ${comChoice}`;
        message.style.backgroundColor = "red";
    }
};

// Main Game Logic
const playGame = (userChoice) => {
    comChoice = genComputerChoice();
    if (userChoice === comChoice) {
        drawGame(userChoice, comChoice);
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = comChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = comChoice === "Scissors" ? false : true;
        } else {
            userWin = comChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};
