"use scripts";


var a, b, c;

a = 5;
b = 7;
c = 10;

var smallestNum = a;
var largestNum = a;

if (b < smallestNum) {
    smallestNum = b;
} else if (c < smallestNum) {

    smallestNum = c;
}

if (b > largestNum) {
    largestNum = b;
}
else if (c > largestNum) {
    largestNum = c;
}
else {
    console.log("This is not a number")
}
console.log(smallestNum);
console.log(largestNum);