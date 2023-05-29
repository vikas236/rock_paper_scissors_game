const btn = document.querySelectorAll(".choice")


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
    else if (p=="rock" && c=="paper") return "You Lose! Paper beats Rock"
    else if (p=="paper" && c=="rock") return "You win! Paper beats Rock"
    else if (p=="rock" && c=="scissor") return "You win! Rock beats Scissor"
    else if (p=="scissor" && c=="rock") return "You Loose! Rock beats Scissor"
    else if (p=="paper" && c=="scissor") return "You Loose! Scissor beats Paper"
    else if (p=="scissor" && c=="paper") return "You win! Scissor beats Paper"
    else return "Invalid input";
}

function selection() {
    for (i=0; i<btn.length; i++) {
        btn[i].addEventListener("click", function() {
            let = choice = this.innerText.toLowerCase();
            console.log(play(choice));
        });
    }
}

selection();