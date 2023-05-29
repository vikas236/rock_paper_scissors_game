const btn = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const p_score = document.querySelector(".p_score");
const c_score = document.querySelector(".c_score");
let winner = "";
// declaring person score and computer score
let ps = 0;
let cs = 0;

// function declaration

function getComputerChoice() {
    num = (Math.floor(Math.random()*3));
    if (num==0) return "rock"
    else if (num==1) return "paper"
    else return "scissor"
}

function play(choice) {
    let p = choice;
    let c = getComputerChoice();
    
    if (p==c) return "its a tie!"
    else if (p=="rock" && c=="paper") { return "You Lose! Paper beats Rock" }
    else if (p=="paper" && c=="rock") { return "You Win! Paper beats Rock" }
    else if (p=="rock" && c=="scissor") { return "You Win! Rock beats Scissor" }
    else if (p=="scissor" && c=="rock") { return "You Lose! Rock beats Scissor" }
    else if (p=="paper" && c=="scissor") { return "You Lose! Scissor beats Paper" }
    else if (p=="scissor" && c=="paper") { return "You Win! Scissor beats Paper" }
    else return "Invalid input";
}

function selection() {
    for (i=0; i<btn.length; i++) {
        btn[i].addEventListener("click", function() {
            let = choice = this.innerText.toLowerCase();
            winner = play(choice);
            result.innerText = winner;
            if (winner.charCodeAt(4)==87) ps++;
            else if (winner.charCodeAt(4)==76) cs++;
            if (ps==5) end("You")
            else if (cs==5) end("Computer");
            p_score.innerText = ps;
            c_score.innerText = cs;
        });
    }
}

function end(str) {
    result.innerText = `${str} Won!`;
    ps = 0;
    cs = 0;
}


// calling functions

selection();