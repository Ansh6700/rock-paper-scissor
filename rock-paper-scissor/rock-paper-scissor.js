let userscore = 0;
let compscore = 0;

let msg = document.querySelector("#message-container");

let userscorepara = document.getElementById("user-score");
let compscorepara = document.getElementById("comp-score");

const choices = document.querySelectorAll(".choice");

const compchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#31572C";
}

const showWinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "#04F06A";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose!");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("userChoice  = ", userChoice);
    const computerchoice = compchoice();
    console.log("comp choice = ", computerchoice);

    if (userChoice === computerchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = computerchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = computerchoice === "scissors" ? false : true;
        } else {
            userwin = computerchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
