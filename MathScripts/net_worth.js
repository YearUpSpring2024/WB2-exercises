"use sctrict";

// assets

var assets = 1000000;
var debt = 200;

var networth = assets - debt;

console.log(`Your net worth is ${networth}`);



// or

function calculateNetWorth(assets, debt){
    return assets - debt;
}

var networth = calculateNetWorth(1000000, 200);

console.log(`Your networth is ${networth}`);