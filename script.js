let scissorPic = document.querySelector(".scissor-pic");
let rockPic = document.querySelector(".rock-pic");
let paperPic = document.querySelector(".paper-pic");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let resultBtn = document.querySelector(".display-result")

let computerCount = 0;
let playerCount = 0;
//computer move

let computerMoveFunc = ()=>{
    let num = Math.ceil(Math.random()*3);
    if(num === 1){
        return "rock";
    }
    else if(num === 2){
        return "paper";
    }
    else{
        return "scissor";
    }
}

//player click Scissor
scissorPic.addEventListener("click" , ()=>{
    let computerMove = computerMoveFunc();
    if(computerMove === "rock"){  //lose condition
        resultBtn.style.backgroundColor = "#F52549";
        resultBtn.innerText = "computer Won! Rock breaks scissor";
        computerCount +=1;
        computerScore.innerText = computerCount;
    }
    else if(computerMove === "paper"){  // Player Won
        resultBtn.style.backgroundColor = "#2C5F2D";
        resultBtn.innerText = "You Won! Scissor cuts paper";
        playerCount +=1;
        playerScore.innerText = playerCount;
        
    }
    else{  // draw condition
        resultBtn.style.backgroundColor = "#8AAAE5";
        resultBtn.innerText = "Its a Draw";
    }
})
//player click rock
rockPic.addEventListener("click" , ()=>{
    let computerMove = computerMoveFunc();
    if(computerMove === "paper"){  //lose condition
        resultBtn.style.backgroundColor = "#F52549";
        resultBtn.innerText = "Computer Won! Paper flew Rock";
        computerCount +=1;
        computerScore.innerText = computerCount;
    }
    else if(computerMove === "scissor"){  // Player Won
        resultBtn.style.backgroundColor = "#2C5F2D";
        resultBtn.innerText = "You Won! rock Break Scissor";
        playerCount +=1;
        playerScore.innerText = playerCount;
        
    }
    else{  // draw condition
        resultBtn.style.backgroundColor = "#8AAAE5";
        resultBtn.innerText = "Its a Draw!";
    }
})
//player click paper
paperPic.addEventListener("click" , ()=>{
    let computerMove = computerMoveFunc();
    if(computerMove === "scissor"){  //lose condition
        resultBtn.style.backgroundColor = "#F52549";
        resultBtn.innerText = "Computer Won! scissor cuts Paper";
        computerCount +=1;
        computerScore.innerText = computerCount;
    }
    else if(computerMove === "rock"){  // Player Won
        resultBtn.style.backgroundColor = "#2C5F2D";
        resultBtn.innerText = "You Won! Paper flew rock";
        playerCount +=1;
        playerScore.innerText = playerCount;
        
    }
    else{  // draw condition
        resultBtn.style.backgroundColor = "#8AAAE5";
        resultBtn.innerText = "Its a Draw!";
    }
})
