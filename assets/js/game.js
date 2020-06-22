function fight (enemy) {
  // Set player to go first
  var isPlayerTurn = true;
  // If Math.random < .5 then
  if (Math.random() > .5) {
    // set it to be the enemyRobot's turn
    isPlayerTurn = false;
  };

  while (enemy.health > 0 && playerInfo.health > 0) {
    // If it is the player's turn
    if (isPlayerTurn) {
      // ask the user if they'd like to fight or skip this fight
      if (fightOrSkip()) {
        // if they choose to skip then break out of the loop
        break;
      } else { /* If the player chooses to fight then*/
          // Randomize the damage the player will do
          var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
          // Subtract player's damage from the enemies health
          enemy.health = Math.max(0, enemy.health - damage);
          // Log how much damage the player's robot has done
          console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        }
      // If the enemy's health is below 0
      if (enemy.health <= 0) {
        // then log that the enemies robot has died
        console.log(enemy.name + " has died.");
        // award the user +20 money
        playerInfo.money = playerInfo.money + 20;
        // leave the loop
        break;
      } 
      else { /* If enemies robot is still alive */
        // Log how much health the enemy has
        console.log(enemy.name + " still has " + enemy.health + " health left.");
      }
    } else { /* If it is not the player's turn */
        // ask the user if they'd like to fight or skip this fight
        if (fightOrSkip()) {
          // if they choose to skip then break out of the loop
          break;
        }   
        // Randomize the damage the enemies robot will do
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        // Subtract the enemies damage from the player's health
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log how much damage the enemies robot has done
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        // If the player's health is less than 0
        if (playerInfo.health <= 0) {
          // Log that the player has died
          console.log(playerInfo.name + " has died!");
          // Break out of the loop
          break;
        } 
          else { /* If the player's robot is still alive */
            // Log how much health the player has
            console.log(playerInfo.name + " still has " + playerInfo.health + " health left.");
          }
      }
    // Reverse turns for the next round
    isPlayerTurn = !isPlayerTurn;
    };
  }


// Define enemy attributes
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
    health: randomNumber(40, 60)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
    health: randomNumber(40,60)
 },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
    health: randomNumber(40,60)
  }
];

function getPlayerName() {
  var name = "";
  while (!name.trim()) {
    name = prompt("What is your robot's name?");
  };
  console.log("Player name is " + name);
  return name;
}

// Define player attributes
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      console.log("Refilling player's health by 20 for 7 dollars");
      this.health += 20;
      this.money -= 7;
    } else {
      console.log("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      console.log("Upgrading player's attack by 6 for 7 dollars");
      this.attack += 6;
      this.money -= 7;
    } else {
      console.log("You don't have enough money!");
    }
  }
};

// function to generate a random numeric value
function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// Prints player name, health, and attack to console
console.log(
    "Name: " + 
    playerInfo.name + 
    ", Health: " + 
    playerInfo.health + 
    ", Attack: " + 
    playerInfo.attack
);

function startGame(){
    // Reset Player Attributes And Money
    playerInfo.reset();

    // For every enemy name in the enemyName array
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        console.log("Welcome to Robot Gladiators! Round " + (i + 1));
        // Picks the enemy name based on their index in the array
        var pickedEnemyObj = enemyInfo[i];
        // pass enemy picked from the enemyInfo index into fight function
        fight(pickedEnemyObj);

        // check is play health is above 0 and there are no more enemies
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
          var storeConfirm = confirm("The fight is over, visit the store before the next round?");
          if(storeConfirm) {
            shop();
          }
        }
      } else {
        console.log("You have lost your robot in battle! Game over!");
        break;
      }
    };

  // after the loop ends, player is either out of health or enemies to fight
  endGame();
};

function endGame() {
  console.log("The game has now ended. Let's see how you did!");
  // If player is still alive then the player wins!
    // Retrieve the current high score from localStorage
    var highscore = localStorage.getItem("highscore");

  if (playerInfo.health > 0) {
    // When the game has ended and we've survived facing all the robots:
    // Compare the player robot score with the current high score
    if (highscore === null) {
      highscore = 0;
      localStorage.setItem("highscore", 0);
    }

    // If the player score is higher
    if (playerInfo.money > highscore) {
      // Set new high score object into localStorage
      localStorage.setItem("highscore", playerInfo.money);
      // Set new player robot's name object into localStorage
      localStorage.setItem("name", playerInfo.name);
      // Send player the message that they beat the high score
      console.log(playerInfo.name + " now has a high score of " + playerInfo.money)
    }
  } 
    else {
      console.log("You've lost your robot in battle");
      console.log(playerInfo.name + " did not beat the highscore of " + highscore + ". Maybe next time!");
    }  

  // Ask the player if they'd like to play again
  var playAgainConfirm = confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    console.log('Thank you for playing Robot Gladiators! Come back soon!');
  }
};

function shop() {
  console.log(playerInfo.name + " has entered the shop");
  var shopOptionPrompt = prompt("Would you like to REFILL (enter 1) your health, UPGRADE (enter 2) your attack, or LEAVE (enter 3) the shop?");
  shopOptionPrompt = parseInt(shopOptionPrompt);
  
  switch(shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      console.log("Leaving the store.");
      // do nothing so function will end
      break;
    default:
      console.log("You not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }

};

function fightOrSkip(enemy) {
  // Ask the user if they would like to start or skip the fight
  var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue.");
  promptFight = promptFight.toLowerCase();

  // while promptFight is empty or null
  if (!promptFight.trim()) {
    return fightOrSkip();
  }

  // Allows user to skip fight
  if (promptFight === "skip") {
    // CONFIRM EXIT
    var confirmSkip = confirm("Are you sure you'd like to quit?");
    // If yes then skip this fight
    if (confirmSkip) {
      console.log(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // Subtract 10 money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      // Go into the shop
      shop();
      return true;
    }       
    
    else {
      console.log("pick a valid option!");
    }
  }

  return false;
}

startGame();