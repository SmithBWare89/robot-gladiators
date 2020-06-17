// Sets Player Attributes
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Prints player name, health, and attack to console
console.log(playerName, playerHealth, playerAttack);

// Sets enemy attributes
var enemyName = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  while(enemyHealth > 0 && playerHealth > 0) {
    // Ask the user if they would like to start or skip the fight
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue.");

    if (promptFight === "skip" || promptFight === "SKIP") {
      // Confirm quit
      var confirmSkip = confirm("Are sure you'd like to quit?");
      // if yes then skip the fight
      if (confirmSkip) {
        alert(playerName + " has decided to skip this fight. Goodbye!");
        // penalize player for skipping (subtract 10 money)
        playerMoney = playerMoney - 10;
        console.log("playerMoney " + playerMoney);
        break;
      }
      
    }

    if (promptFight === "fight" || promptFight === "FIGHT")

      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack ;
      // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

      // check enemy health
      if (enemyHealth <= 0) {
          alert(enemyName + " has died!");
          playerMoney = playerMoney + 20;
          // leave while loop now that enemy is dead
          break;
      }
          else {
              alert(enemyName + " still has " + enemyHealth + " health left.");
          }

      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      playerHealth = playerHealth - enemyAttack;
      // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

      // check player health
      if (playerHealth <= 0) {
          alert(playerName + " has died!");
          break;

      } else {
              alert(playerName + " still has " + playerHealth + " health left.");
          }
    }
}

for (i = 0; i < enemyName.length; i ++) {
  if (playerHealth > 0) {
    alert("Welcome to Robot Gladiators! Round " + (i + 1));
    // Picks the enemy name based on their index in the array
    var pickedEnemyName = enemyName[i]
    // Resets enemy health to 50
    enemyHealth = 50;
    // Debugger stops code and checks what's going on in that moment
    debugger;
    // pass each pickedEnemyName variable into the fight function
    fight(pickedEnemyName);
  } else {
    alert("You have lost your robot in battle! Game over!");
    break;
  }
};

// If enemy health is <= 0
  // * Prompt user to REFILL health, UPGRADE attack, or LEAVE store
  // REFILL health
    // Confirm health refill
    // +(Health Refill)
    // Continue with fight
  // Upgrade attack
    // Confirm attack upgrade
    // Add attack power
    // Continue fight
  // LEAVE Store
    // Confirm leave
    // Continue fight

startGame()

endGame()

shop()