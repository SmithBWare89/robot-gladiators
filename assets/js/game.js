// Sets Player Attributes
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Prints player name, health, and attack to console
console.log(playerName, playerHealth, playerAttack);

// Sets enemy attributes
var enemyName = ["Roborto", "Amy Android", "Robot 3"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // Ask the user if they would like to start or skip the fight
  var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue.");

  // Allows user to skip fight
  if (promptFight === "skip" || promptFight === "SKIP") {
    // CONFIRM EXIT
    var confirmSkip = confirm("Are you sure you'd like to quit?");
    // If yes then skip this fight
    if (confirmSkip) {
      alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 10;
      console.log("playerMoney " + playerMoney);
    };

    // If the user chooses to fight then
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // Subtract value of playerAttack from enemyHealth and update enemyHealth
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      // If the enemy has died
      if (enemyHealth <= 0) {
        // Alert the player the enemy has died
        alert(enemyName + " has died.");
        // Then award player +20 money for winning
        playerMoney = playerMoney + 20;
      } /* If the enmy has not died*/
      else {
        // Alert the player how much health the enemy has remaining
        alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // Subtract enemyAttack from playerHealth and log value
      playerHealth = playerHealth - enemyAttack
      // Log a resulting message to console for attack
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      //  CHeck player health is above 0
      if (playerHealth <= 0) {
        alert(playerName + " has died!");
      } /* Alert how much health player robot still has */
      else {
        alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  }
}

var startGame = function() {
    // For every enemy name in the enemyName array
    for (i = 0; i < enemyName.length; i++) {
      if (playerHealth > 0) {
        alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // Picks the enemy name based on their index in the array
        var pickedEnemyName = enemyName[i];
        // Resets enemy health to 50
        enemyHealth = 50;
        // pass each pickedEnemyName variable into the fight function
        fight(pickedEnemyName);
      } else {
        alert("You have lost your robot in battle! Game over!");
        break;
      }
    }

  // after the loop ends, player is either out of health or enemies to fight
  endGame();
}

var endGame = function() {
  alert("The game has now ended. Let's see how you did!");
  // If player is still alive then the player wins!
  if (playerHealth > 0) {
    alert("Great job, you've survived the game! You now have a score of " + playerMoney);
  } else {
    alert("You've lost your robot in battle");
  }
  // Ask the player if they'd like to play again
  var playAgainConfirm = confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // Reset Player Attributes And Money
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // restart the game
    startGame();
  } else {
    alert('Thank you for playing Robot Gladiators! Come back soon!');
  }
}

// start the game when the page loads
startGame();