"use scripts";


var a, b,c;

a = 3;
b = 5;
c= 8;

var smallestNum = a;

if(b < smallestNum){
    smallestNum = b;
}else if(c < smallestNum){
    
    smallestNum = c;
}

console.log(smallestNum)