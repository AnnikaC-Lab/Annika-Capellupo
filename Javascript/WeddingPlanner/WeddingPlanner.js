
function setTables(){
  
var theGuests = prompt("How many guests do you have?");
var theTables = prompt("How many tables do you want?");


const numbersG = theGuests.match(/\d+/g).map(Number);
console.log(numbersG);
const numbersT = theTables.match(/\d+/g).map(Number);
console.log(numbersT);

let baseNum = Math.floor(numbersG / numbersT);
let remainder = numbersG % numbersT; 
let baseTables = numbersT - remainder;
let remainderPeople = baseNum + 1; 
 


    if (remainder === 0 ) {
      alert("Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
     " tables of " + baseNum + " guests.");
    
        }  else if (baseTables > 1 && baseNum >1 && remainder >1) {
         alert( "Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
         " tables of " + baseNum + " guests and " + remainder +" tables of "+ remainderPeople + " guests.");

        } else if (baseTables === 1 && baseNum === 1 && remainder === 1) {
         alert( "Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
         " table of " + baseNum + " guest and " + remainder +" table of "+ remainderPeople + " guests.");
        
        } else if (baseTables === 1 && baseNum === 1) {
        alert( "Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
        " table of " + baseNum + " guest and " + remainder +" tables of "+ remainderPeople + " guests.");
    
        } else if (baseTables >1 && baseNum ===1){
        alert( "Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
        " tables of " + baseNum + " guests and " + remainder +" tables of "+ remainderPeople + " guests.");
        
        } else if (baseTables ===1) {
        alert( "Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
         " table of " + baseNum + " guests and " + remainder +" tables of "+ remainderPeople + " guests.");
        
        } else if (remainder===1) {
        alert( "Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
         " tables of " + baseNum + " guests and " + remainder +" table of "+ remainderPeople + " guests.");
        
        } else {
         alert( "Your " + theGuests + " guests will be seated at as follows: " + baseTables + 
        " tables of " + baseNum + " guests and " + remainder +" tables of "+ remainderPeople + " guests.");
        }
      }