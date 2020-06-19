debugger;

// Sets Player Attributes
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Prints player name, health, and attack to console
console.log(playerName, playerHealth, playerAttack);

// Sets enemy attributes
var enemyName = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
var enemyHealth = randomNumber(40, 60);

function fight (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
      // Ask the user if they would like to start or skip the fight
      var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue.");
      
      // If the user chooses to fight then
      if (promptFight === "fight" || promptFight === "FIGHT") {
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // If the enemy has died
        if (enemyHealth <= 0) {
          // Alert the player the enemy has died
          alert(enemyName + " has died.");
          // Then award player +20 money for winning
          playerMoney = playerMoney + 20;
          break;
        } /* If the enemy has not died*/
        else {
          // Alert the player how much health the enemy has remaining
          alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);

        // Log a resulting message to console for attack
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //  CHeck player health is above 0
        if (playerHealth <= 0) {
          alert(playerName + " has died!");
          break;
        } /* Alert how much health player robot still has */
        else {
          alert(playerName + " still has " + playerHealth + " health left.");
        }
      }

        // Allows user to skip fight
    if (promptFight === "skip" || promptFight === "SKIP") {
      // CONFIRM EXIT
      var confirmSkip = confirm("Are you sure you'd like to quit?");
      // If yes then skip this fight
      if (confirmSkip) {
        alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney " + playerMoney);
        break;
      }
      
      else {
        alert("pick a valid option!");
      }
    }
  }
}

// function to generate a random numeric value
function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

function startGame(){
        // Reset Player Attributes And Money
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
    // For every enemy name in the enemyName array
    for (var i = 0; i < enemyName.length; i++) {
      if (playerHealth > 0) {
        alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // Randomizes the next enemy robots health
        enemyHealth = randomNumber(40, 60); 
        // Picks the enemy name based on their index in the array
        var pickedEnemyName = enemyName[i];
        // pass each pickedEnemyName variable into the fight function
        fight(pickedEnemyName);
        // if a players health is above 0 and we're not at the last enemy then go to the shop
        if (playerHealth > 0 && i < enemyName.length - 1) {
          var storeConfirm = confirm("The fight is over, visit the store before the next round?");
          if(storeConfirm) {
            shop();
          }
        }
      } else {
        alert("You have lost your robot in battle! Game over!");
        break;
      }
    };

  // after the loop ends, player is either out of health or enemies to fight
  endGame();
};

function endGame() {
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
    // restart the game
    startGame();
  } else {
    alert('Thank you for playing Robot Gladiators! Come back soon!');
  }
};

function shop() {
  console.log(playerName + " has entered the shop");
  var shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?");

  switch(shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        alert("Refilling player's health by 20 for 7 dollars");
        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        alert("You don't have enough money!");
      }
      break;
    case "UPGRADE":
    case "upgrade": 
      if (playerMoney >= 7) {
        alert("Upgrading player's attack by 6 for 7 dollars");
        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        alert("You don't have enough money!");
      }
      break;
    case "LEAVE":
    case "leave":
      alert("Leaving the store.");
      // do nothing so function will end
      break;
    default:
      alert("You not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// start the game when the page loads
startGame();
