"use strict";

// interest rate
var interestRate = 5;

// intial amount
var initialAmount = 1000;

// calcualte years to double using rule of 72
var years = 72 / interestRate;

var finalAmount = initialAmount * 2

console.log(`At a ${interestRate} interest rate, your savings account will be
worth ${finalAmount} in ${years} years`);



// function
function yearsToDouble(interestRates){
    return 72 / interestRates;
}

var initialAmounts = 1000;
var interestRates = 5;

var years = yearsToDouble(interestRates);
var finalAmounts = initialAmounts * 2;

console.log(`At a ${interestRates} interest rate, your savings account will be
worth ${finalAmounts} in ${years.toFixed()} years`);
