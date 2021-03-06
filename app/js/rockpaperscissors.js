////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var winner;
function getPlayerMove(move) {
	var move
		if (move != null) {
			move = move;
		} else {
			move = getInput();
		}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
	var move
		if (move != null) {
			move = move;
		} else {
			move = randomPlay();
		}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log("Computer chose" + move);
    return move;
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
        if (playerMove === "rock" && computerMove === "rock") {
            winner = "It's a Tie!";
        } else if (playerMove === "rock" && computerMove === "scissors") {
            winner = "Player Wins!";
        } else if (playerMove === "rock" && computerMove === "paper") {
            winner = "Computer Wins!";
        } else if (playerMove === "scissors" && computerMove === "scissors") {
            winner = "It's a Tie!";
        } else if (playerMove === "scissors" && computerMove === "rock") {
            winner = "Computer Wins!";
        } else if (playerMove === "scissors" && computerMove === "paper") {
            winner = "Player Wins!";
        } else if (playerMove === "paper" && computerMove === "paper") {
            winner = "It's a Tie!";
        } else if (playerMove === "paper" && computerMove === "rock") {
            winner = "Player Wins!";
        } else if (playerMove === "paper" && computerMove === "scissors") {
            winner = "Computer Wins!";
        }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
    	getWinner(getPlayerMove(), getComputerMove());
    		if (winner == "player"){
    			playerWins++;
    			console.log([playerWins, computerWins]);
    		} else if (winner == "computer") {
    			computerWins++;
    			console.log([playerWins, computerWins]);
    		} else {
    			playerWins++ && computerWins++;
    			console.log([playerWins, computerWins]);
    		}
    return [playerWins, computerWins];
    		}
}

