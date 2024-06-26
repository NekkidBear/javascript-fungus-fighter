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
function arcaneScepter(event) {
  let attackCost = 12;
  let damage = 14;
  console.log("Arcane Scepter!"); // confirms which button event was triggered
  updateGameStateAndRender(attackCost, damage);
}

/**
 * This function is triggered when the Entangle attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
function entangle(event) {
  let attackCost = 23;
  let damage = 9;
  console.log("Entangle!"); // confirms which button event was triggered
  updateGameStateAndRender(attackCost, damage);
}

/**
 * This function is triggered when the Dragon Blade attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
function dragonBlade(event) {
  let attackCost = 38;
  let damage = 47;
  console.log("Dragon Blade!"); // confirms which button event was triggered
  updateGameStateAndRender(attackCost, damage);
}

/**
 * This function is triggered when the Star Fire attack button is clicked. It passes the values for the attack cost and damage to the update function
 */
function starFire(event) {
  let attackCost = 33;
  let damage = 25;
  console.log("Star Fire!"); // confirms which button event was triggered
  updateGameStateAndRender(attackCost, damage);
}

function updateGameStateAndRender(ap, damage) {
  // console.log("Damage Report!");
  console.log("Attack cost: ", ap, "Damage", damage);

  //update global variables
  attackPoints -= ap;
  fungusHP -= damage;

  //identify DOM elements to update
  let attackButtons = document.getElementsByClassName(".attack-btn");
  let fungusAnimation = document.querySelector(".freaky-fungus");
  let fungusHPText = document.querySelector(".hp-text");
  let attacktPointsText = document.querySelector(".ap-text");

  //    update the text above the HP and AP bars
    attacktPointsText.textContent = `${attackPoints} AP`; // update AP
    fungusHPText.textContent = `${fungusHP} HP`; //update HP

  // update the progress bars

  // console logs to confirm correct DOM Object is selected
  console.log("attack Points:", attacktPointsText.textContent);
  console.log("fungus HP:", fungusHPText.textContent);
  console.log("attackButtons:", attackButtons);
  console.log("fungus animation:", fungusAnimation);

// attack points are 0
  if (attackPoints < 0) {
    attackPoints = 0;
    attackButtons.classList.add("disabled"); // Disable the attacks
    fungusAnimation.classList.add("jump"); // Fungus Jumps
    fungusAnimation.classList.remove("walk");
    console.log("You Lose!"); 
  }

// fungus HP is 0
  if (fungusHP < 0) {
    fungusHP = 0;
//fungus is dead; you win!
    fungusAnimation.classList.add("dead"); 
    fungusAnimation.classList.remove("walk");
  }

  //console.log current states of variables and fungus animation
  console.log("attack points state:", attackPoints);
  console.log("fungusHP state:", fungusHP);
  console.log("fungus animation:", fungusAnimation);
}
