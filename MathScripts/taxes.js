"use scripts"

// set amount of taxes
var salary = 5000;

// tax that is 
var taxWithHeld = (23/100) * salary;

console.log("Your federal taxes withheld "+ taxWithHeld.toFixed(2));