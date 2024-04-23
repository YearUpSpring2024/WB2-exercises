"use strict";

var radius = 6;

var area = Math.PI * radius * radius;

console.log(area.toFixed(2))



function  areaOfCircle(radius){
    return Math.PI * radius * radius;
}

var area = areaOfCircle(radius);

console.log(`The Area of a circle with radius ${radius} ${area.toFixed(2)}`);