// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessCount = 0;
    var guessLeft = 10;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


      // This logic determines the outcome of the game (win/loss/guesses left/ guess count), and increments the appropriate number.

        if (userGuess === computerGuess) {
          wins++;
          guessCount++;
          guessLeft - 1;
        } else if (userGuess != computerGuess) {
          losses++;
          guessCount++;
          guessLeft--;
        }


      // This logic tells the game to stop and reset after the Guesses Left counter reaches '0'

      if (guessLeft === 0){
      	alert("You are out of guesses! Press enter to play again!");
      	window.location.reload();
      	
      }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/guess count.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guess Count: " + guessCount + "</p>" +
          "<p>Guesses Left: " + guessLeft + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }






