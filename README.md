# Rock-paper-Scissor-Game
This is a web base game. languages used are HTML , CSS and JavaScript
Rock Paper Scissors Game
This is a simple implementation of the classic Rock Paper Scissors game using JavaScript and HTML/CSS. The game consists of the following components:

HTML Structure: Contains elements for displaying game options (rock, paper, scissor), scores for the player and computer, and a result display area.

CSS Styling: Minimal styling to make the game interface presentable.

JavaScript Logic: Handles game mechanics such as player clicks on game options, computer random move generation, and result evaluation.

How to Play
Clone or Download the repository to your local machine.

Open the index.html file in a web browser.

Game Rules:

Click on the image representing your choice (rock, paper, or scissor).
The computer will randomly choose its move.
Results are displayed in the result area:
"Computer Won! [Reason]" if the computer wins.
"You Won! [Reason]" if the player wins.
"It's a Draw!" if both choose the same option.
Scoring:

Scores for the player and computer are updated accordingly.
Player score is displayed under "Your Score".
Computer score is displayed under "Computer Score".
Code Explanation
Variables:

scissorPic, rockPic, paperPic: Variables holding references to the HTML elements representing game options.
playerScore, computerScore: Variables holding references to the HTML elements displaying scores.
resultBtn: Variable holding reference to the HTML element where game results are displayed.
computerCount, playerCount: Variables tracking scores for the computer and player.
Functions:

computerMoveFunc: Generates a random move for the computer (rock, paper, or scissor).
Event Listeners:

Each game option (scissorPic, rockPic, paperPic) has an event listener that triggers when clicked.
Depending on the player's choice and the computer's move, the result is displayed and scores are updated accordingly.
Further Customization
You can modify the CSS to change the look and feel of the game.
Add more game options or features to enhance the game.
Implement additional logic for handling edge cases or special scenarios.
Enjoy playing Rock Paper Scissors!
