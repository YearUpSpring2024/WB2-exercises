"use strict";

// getting the date
var now = new Date();
var currentHour = now.getHours();

// just to see what time it is
console.log(currentHour);

// initializing a varible call greeting
var greeting;

if (currentHour < 10){
    greeting = ("Good morning");
}else if(currentHour <17){
    greeting = ("Good day");

}else{
    greeting = ("Good evening");
}

console.log(greeting);

function greetingMessage(){
    var now = new Date()
    var currentHour = now.getHours();
    var greeting;

    if(currentHour <10){
        greeting = "good morning";
    }else if(currentHour < 17){
        greeting = "Good day";
    }else{
        greeting = "Good evening"
    }
    console.log(greeting);
}
    

greetingMessage()