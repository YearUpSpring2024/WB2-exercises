"use strict";

var billAmount = 231.9;
var tipPercent = 25;

var tipAmount = billAmount * (tipPercent / 100);

console.log(`The tip on a ${billAmount} food bill is $${tipAmount.toFixed(2)}.`);

// another way

function calculateTip(bill, tipPercent){
    return bill * (tipPercent /100);
}

var bill = 231.9;
tipPercent = 25;

var tipExpected = calculateTip(bill, tipPercent);
console.log(`The tip on a ${bill} food bill is ${tipExpected.toFixed(2)}`);

