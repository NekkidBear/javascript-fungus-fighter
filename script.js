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

function arcaneScepter(event) {
  let attackCost = 12;
  let damage = 14;
  //  console.log("Arcane Scepter!"); // confirms which button event was triggered
  calculateHPandAP(attackCost, damage);
}

function entangle(event) {
  let attackCost = 23;
  let damage = 9;
  //   console.log("Entangle!"); // confirms which button event was triggered
  calculateHPandAP(attackCost, damage);
}

function dragonBlade(event) {
  let attackCost = 38;
  let damage = 47;
  //   console.log("Dragon Blade!"); // confirms which button event was triggered
  calculateHPandAP(attackCost, damage);
}
function starFire(event) {
  let attackCost = 33;
  let damage = 25;
  //   console.log("Star Fire!"); // confirms which button event was triggered
  calculateHPandAP(attackCost, damage);
}

function calculateHPandAP(ap, hp) {
  // TO DO: decrement scores
  console.log("Damage Report!");
  console.log(ap, hp);
}
