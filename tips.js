'use strict';

// sample outputs
var foodCost = 79.25;
var tax =6.54;
var tip = 12.00;


// Calculations

var totalDue = foodCost + tax + tip;

// output

// console.log(`The total due is ${totalDue}`);

console.log(`Food cost ${foodCost} and tax is ${tax}`);
// Does not have full amount
// console.log(`Tip is ${tip}`);

console.log(`Tip is ${tip.toFixed(2)}`);
console.log(`Total Due is ${totalDue}`);