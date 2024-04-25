"use script";

function calculateGrossPay(payRate, hoursWorked) {
    if (hoursWorked < 40) {
        return ((payRate * hoursWorked).toFixed(2));
    }
    else {
        var regularPay = payRate * 40;
        var overtimPay = (hoursWorked - 40) * (payRate * 1.5)
        return ((regularPay + overtimPay).toFixed(2));
    }
}

// calculateGrossPay(12.5, 20);
// calculateGrossPay(25,40);
// calculateGrossPay(17.30,45);

var payRate = 10;
var hoursWorked = 45;


var weeklyGrossPay = calculateGrossPay(payRate, hoursWorked);

// get the annual pay
var anualGrossPay = weeklyGrossPay * 52;

// intializing the taxRate
var taxRate;
// now adding tax
let filingStatus = "single";

if (filingStatus === "single") {
    if (anualGrossPay < 12000) {
        taxRate = 0.05;
    } else if (anualGrossPay < 25000) {
        taxRate = 0.10;
    } else if (anualGrossPay < 75000) {
        taxRate = 0.15;
    } else {
        taxRate = 0.20;
    }
}
else if (filingStatus === "joint") {
    if (anualGrossPay < 12000) {
        taxRate = 0.0;
    } else if (anualGrossPay < 25000) {
        taxRate = 0.6;
    } else if (anualGrossPay < 75000) {
        taxRate = 0.11;
    } else {
        taxRate = 0.20;
    }
} else {
    console.log("invalid filing status");
}

// how much tax they hold
let taxHold = weeklyGrossPay * taxRate;
// get the net
let net = weeklyGrossPay - taxHold;

console.log("You worked " + hoursWorked + " hours this period ");
console.log("Because you earn $" + payRate + " per hour, your gross pay is $" + weeklyGrossPay);
console.log("Your filing status is " + filingStatus);
console.log("Your tax withholdings this period is $" + taxHold);
console.log("Your net pay is $" + net);