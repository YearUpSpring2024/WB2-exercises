"use script";


// formula sqrt (x2 - x1)squared + (y2 - y1)squared
var x1= 2;
var y1 = 3;

var x2=4;
var y2 = 5;

var distance = Math.sqrt( Math.pow( (x2 - x1), 2) + Math.pow( (y2 - y1),2 ) );

console.log(distance.toFixed(2));