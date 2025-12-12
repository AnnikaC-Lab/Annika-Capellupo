let userBalance = prompt("Welcome to the Dice Game! How much money would you like to play with?");
if (userBalance === null){
  console.log(alert("You must input an amount to play the game. Refresh the page and try again."));
} else if(userBalance === "") {
  console.log(alert ("You must input a number to play the game. Refresh the page and try again."));
}

// note: all of the variables are global variables(scope- seen through out(page))= be modified in functions that can permiate entire file
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();


function rollDice() {
  // wanted range be 1-6 = have to mutliple by 6 and add 1 bc mathrandom could give 0.1 (ie rounds down no good) 
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll (to match random num)
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;

    if (dieSum <= 5){
      userBalance = parseInt(userBalance) - 5; 
      outcome= "You have $" + userBalance; 
      document.querySelector("h4").innerHTML = banner + "<br>" + outcome + "."; 
    } else if (dieSum >= 9) {
      userBalance = parseInt(userBalance) + 5;
      outcome = "You have $" + userBalance; 
      document.querySelector("h4").innerHTML = banner + "<br>" + outcome + ".";
    } else { 
      userBalance = parseInt(userBalance);
      outcome = "You have $" + userBalance;
      document.querySelector("h4").innerHTML = banner + "<br>" + outcome + ".";

    }
    }

  const myButton = document.getElementById("myButton"); 
  const clicksCounte = document.getElementById("clicksCounte");

  let maxClicks = null; 
  let currentClick = 0; 

  myButton.addEventListener("click", () => {
    if (maxClicks === null) {
      maxClicks = parseInt(prompt("How many times would you like roll the dice?")); 

      if (isNaN(maxClicks) || maxClicks <=0){
        alert("Input invalid. You must enter a positive number.");
        maxClicks= 0;
      }
      clicksCounte.textContent = "Rolls left: " + (maxClicks - currentClick);
    
    } if (currentClick < maxClicks) {
      currentClick++; 
      clicksCounte.textContent = "Rolls left: " + (maxClicks - currentClick);

    } if (currentClick === maxClicks) {
      myButton.disabled = true; 
      clicksCounte.textContent = "You do not have any rolls left. If you would like to keep playing, please refresh the page to start again.";
    }
  }); 

function letsPlay(){
  rollDice();
  whoWon();
}
