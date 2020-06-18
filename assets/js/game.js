// Sets Player Attributes
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// Prints player name, health, and attack to console
console.log(playerName, playerHealth, playerAttack);

// Sets enemy attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
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
      break;
    }
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
        break;
      } /* If the enmy has not died*/
      else {
        // Alert the player how much health the enemy has remaining
        alert(enemyName + " still has " + enemyHealth + " health left.");
      }
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
      break;
    } /* Alert how much health player robot still has */
    else {
      alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
}

for (i = 0; i < enemyName.length; i++) {
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