// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//Declare State variables
let fungusHP = 100;
let attackPoints = 100;
// function onReady() {
//     console.log("Ready to go!")

// Make sure you check the index.html file!
// There are lots of buttons and things ready for you to hook into here!
// 🧠 Remember
// Handle events that ->
// Updates state which is ->
// - Rendered to the DOM
// }

// onReady()

/**
 * This function is triggered when the Arcane Scepter attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
/**
 * This function is triggered when the Arcane Scepter attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
function arcaneScepter(event) {
  let attackCost = 12;
  let damage = 14;
  //  console.log("Arcane Scepter!"); // confirms which button event was triggered
  updateGameState(attackCost, damage);
  updateGameState(attackCost, damage);
}

/**
 * This function is triggered when the Entangle attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
/**
 * This function is triggered when the Entangle attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
function entangle(event) {
  let attackCost = 23;
  let damage = 9;
  //   console.log("Entangle!"); // confirms which button event was triggered
  updateGameState(attackCost, damage);
  updateGameState(attackCost, damage);
}

/**
 * This function is triggered when the Dragon Blade attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
/**
 * This function is triggered when the Dragon Blade attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
function dragonBlade(event) {
  let attackCost = 38;
  let damage = 47;
  //   console.log("Dragon Blade!"); // confirms which button event was triggered
  updateGameState(attackCost, damage);
  updateGameState(attackCost, damage);
}

/**
 * This function is triggered when the Star Fire attack button is clicked. It passes the values for the attack cost and damage to the update function
 */

/**
 * This function is triggered when the Star Fire attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
function starFire(event) {
  let attackCost = 33;
  let damage = 25;
  //   console.log("Star Fire!"); // confirms which button event was triggered
  updateGameState(attackCost, damage);
  updateGameState(attackCost, damage);
}

function updateGameState(ac, damage) { 
  // console.log("Damage Report!");
  // console.log(ap, hp);

  //update state variables
  attackPoints -= ac;
  fungusHP -= damage;

  //identify DOM elements to update
  let attacksDiv = document.getElementById("attacks")
  let fungusAnimation = document.getElementByID("freaky-fungus walk")


  if (attackPoints<0){
    attackPoints=0;
    attacksDiv.classList.add("disabled");
    fungusAnimation.classList.replace("freaky-fungus walk","freaky-fungus jump")
    console.log("You Lose!")
  }
  if (fungusHP<0){
    fungusHP = 0;
    // fungus is dead; you win!
  }

  console.log("attack points:", attackPoints);
  console.log("fungusHP:", fungusHP);
  console.log("fungus animation");
}
