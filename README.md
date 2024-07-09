# Rock-paper-Scissor-Game
# Rock-Paper-Scissors Game README

## Description

This project is a simple Rock-Paper-Scissors game implemented in JavaScript. The player can choose between rock, paper, and scissors by clicking on the corresponding image. The computer randomly selects its move, and the game displays the result, updating the score accordingly.

## Features

- Player can choose rock, paper, or scissors.
- Computer randomly selects its move.
- Displays the result of each round.
- Keeps track of player and computer scores.
- Uses different background colors to indicate win, loss, and draw.

## Files

- `index.html`: Contains the structure of the web page.
- `styles.css`: Contains the styling for the web page.
- `script.js`: Contains the JavaScript code to handle the game logic and update the UI.

## Getting Started

### Prerequisites

To run this project, you'll need:

- A modern web browser

### Installation

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.

### Usage

1. Open the web page in your browser.
2. Click on the rock, paper, or scissors image to make your move.
3. The computer will randomly select its move.
4. The result of the round will be displayed, and the scores will be updated accordingly.

### JavaScript Code Explanation

#### Elements Selection

The script selects various elements from the DOM for manipulation.

```javascript
let scissorPic = document.querySelector(".scissor-pic");
let rockPic = document.querySelector(".rock-pic");
let paperPic = document.querySelector(".paper-pic");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let resultBtn = document.querySelector(".display-result");

let computerCount = 0;
let playerCount = 0;
```

#### Computer Move

The script defines a function to randomly select the computer's move.

```javascript
let computerMoveFunc = () => {
    let num = Math.ceil(Math.random() * 3);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissor";
    }
};
```

#### Player Click Scissor

The script handles the scenario when the player clicks on the scissor image.

```javascript
scissorPic.addEventListener("click", () => {
    let computerMove = computerMoveFunc();
    if (computerMove === "rock") { // lose condition
        resultBtn.style.backgroundColor = "#F52549";
        resultBtn.innerText = "computer Won! Rock breaks scissor";
        computerCount += 1;
        computerScore.innerText = computerCount;
    } else if (computerMove === "paper") { // Player Won
        resultBtn.style.backgroundColor = "#2C5F2D";
        resultBtn.innerText = "You Won! Scissor cuts paper";
        playerCount += 1;
        playerScore.innerText = playerCount;
    } else { // draw condition
        resultBtn.style.backgroundColor = "#8AAAE5";
        resultBtn.innerText = "Its a Draw";
    }
});
```

#### Player Click Rock

The script handles the scenario when the player clicks on the rock image.

```javascript
rockPic.addEventListener("click", () => {
    let computerMove = computerMoveFunc();
    if (computerMove === "paper") { // lose condition
        resultBtn.style.backgroundColor = "#F52549";
        resultBtn.innerText = "Computer Won! Paper flew Rock";
        computerCount += 1;
        computerScore.innerText = computerCount;
    } else if (computerMove === "scissor") { // Player Won
        resultBtn.style.backgroundColor = "#2C5F2D";
        resultBtn.innerText = "You Won! rock Break Scissor";
        playerCount += 1;
        playerScore.innerText = playerCount;
    } else { // draw condition
        resultBtn.style.backgroundColor = "#8AAAE5";
        resultBtn.innerText = "Its a Draw!";
    }
});
```

#### Player Click Paper

The script handles the scenario when the player clicks on the paper image.

```javascript
paperPic.addEventListener("click", () => {
    let computerMove = computerMoveFunc();
    if (computerMove === "scissor") { // lose condition
        resultBtn.style.backgroundColor = "#F52549";
        resultBtn.innerText = "Computer Won! scissor cuts Paper";
        computerCount += 1;
        computerScore.innerText = computerCount;
    } else if (computerMove === "rock") { // Player Won
        resultBtn.style.backgroundColor = "#2C5F2D";
        resultBtn.innerText = "You Won! Paper flew rock";
        playerCount += 1;
        playerScore.innerText = playerCount;
    } else { // draw condition
        resultBtn.style.backgroundColor = "#8AAAE5";
        resultBtn.innerText = "Its a Draw!";
    }
});
```

