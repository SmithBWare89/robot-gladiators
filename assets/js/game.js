// Sets Player Attributes
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Prints player name, health, and attack to console
console.log(playerName, playerHealth, playerAttack);

// Sets enemy attributes
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
  while(enemyHealth > 0) {
    // Ask the user if they would like to start or skip the fight
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue.");
    
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "true" || promptFight === "TRUE") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
      enemyHealth = enemyHealth - playerAttack ;
    
    // Log a resulting message to the console so we know that it worked.
      console.log(
          playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
      console.log(
          enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check enemy health
      if (enemyHealth <= 0) {
          alert(enemyNames + " has died!");
      }
          else {
              alert(enemyNames + " still has " + enemyHealth + " health left.");
          }

      // check player health
      if (playerHealth <= 0) {
          alert(playerName + " has died!");
      }
          else {
              alert(playerName + " still has " + playerHealth + " health left.");
          }
    }
      else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "false" || promptFight === " FALSE") {
        // Confirm quit
        var confirmSkip = confirm("Are sure you'd like to quit?");
        // if yes then skip the fight
        if (confirmSkip) {
          alert(playerName + " has decided to skip this fight. Goodbye!");
          // penalize player for quitting (subtract 2 money)
          playerMoney-2;
          console.log("Player now has " + playerMoney + "money.");
        }
          else {
            fight();
          }
      }
        else {
          alert("You need to pick a valid option. Try again!");
        }
  }
};

for (i = 0; i < enemyNames.length; i ++) {
  var pickedEnemyName = enemyNames[i]
  enemyHealth = 50;
  fight(enemyNames[i]);
};


// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less