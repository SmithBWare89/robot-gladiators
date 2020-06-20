debugger;

function fight (enemy) {
  while (enemy.health > 0 && playerInfo.health > 0) {    
    fightOrSkip(enemy);
    // Alert the user of the enemies stats
    console.log(enemy.name + " is starting this round with  " + enemy.health + " health and will do " + enemy.attack + " damage.");

    // Randomize the damage 
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    // If the enemy has died
    if (enemy.health <= 0) {
      // Alert the player the enemy has died
      console.log(enemy.name + " has died.");
      // Then award player +20 money for winning
      playerInfo.money = playerInfo.money + 20;
      break;
    } /* If the enemy has not died*/
    else {
      // Alert the player how much health the enemy has remaining
      console.log(enemy.name + " still has " + enemy.health + " health left.");

    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // Log a resulting message to console for attack
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

    //  CHeck player health is above 0
    if (playerInfo.health <= 0) {
      console.log(playerInfo.name + " has died!");
      break;
    } /* Alert how much health player robot still has */
    else {
      console.log(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    }
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
    if (playerMoney >= 7) {
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
console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

function startGame(){
    // Reset Player Attributes And Money
    playerInfo.reset();

    // For every enemy name in the enemyName array
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        console.log("Welcome to Robot Gladiators! Round " + (i + 1));
        // Picks the enemy name based on their index in the array
        var pickedEnemyObj = enemyInfo[i];
        // pass each pickedEnemyName variable into the fight function
        fight(pickedEnemyObj);
        // if a players health is above 0 and we're not at the last enemy then go to the shop
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
  if (playerInfo.health > 0) {
    console.log("Great job, you've survived the game! You now have a score of " + playerInfo.money);
  } else {
    console.log("You've lost your robot in battle");
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
  var shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?");

  switch(shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade": 
      playerInfo.upgradeAttack();
      break;
    case "LEAVE":
    case "leave":
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

  // while promptFight is empty or null
  if (!promptFight.trim()) {
    return fightOrSkip();
  }
  
  // If the user chooses to fight then
  if (promptFight === "fight" || promptFight === "FIGHT") {
    return promptFight;
  }  

  // Allows user to skip fight
  if (promptFight === "skip" || promptFight === "SKIP") {
    // CONFIRM EXIT
    var confirmSkip = confirm("Are you sure you'd like to quit?");
    // If yes then skip this fight
    if (confirmSkip) {
      console.log(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // Subtract 10 money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      // Go into the shop
      shop();
    }       
    
    else {
      console.log("pick a valid option!");
    }
  }
}

// start the game when the page loads
startGame();