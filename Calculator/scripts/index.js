"use strict";

window.onload = init;


function init() {
    const addBtn = document.getElementById("add");
    const subtractBtn = document.getElementById("subtract");
    const multiplyBtn = document.getElementById("multiply");
    const divideBtn = document.getElementById("divide");

    // event listener
    addBtn.onclick = add;
    subtractBtn.onclick = subtract;
    multiplyBtn.onclick = multiplication;
    divideBtn.onclick = division;
}

function add() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    const result = number1 + number2;
    document.getElementById("answerField").value = result;

}
function subtract() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    const result = number1 - number2;
    document.getElementById("answerField").value = result;
}

function division() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    const result = number1 / number2;
    document.getElementById("answerField").value = result;
}

function multiplication() {
    const number1 = parseFloat(document.getElementById("number1Field").value);
    const number2 = parseFloat(document.getElementById("number2Field").value);
    const result = number1 * number2;
    document.getElementById("answerField").value = result;

}



// tryiing with switch statement


// function init() {
//     document.getElementById("add").onclick = operate;
//     document.getElementById("subtract").onclick = operate;
//     document.getElementById("multiply").onclick = operate;
//     document.getElementById("divide").onclick = operate;
// }


// function operate(event) {
//     const operator = event.target.id;

//     const number1 = parseFloat(document.getElementById("number1").value);
//     const number2 = parseFloat(document.getElementById("number2").value);

//     let result;


//     switch (operator) {
//         case "add":
//             result = number1 + number2;
//             break;
//         case "subtract":
//             result = number1 - number2;
//             break;
//         case "divide":
//             result = number1 / number2;
//         case "multiply":
//             result = number * number2;
//     }
//     document.getElementById("answerField").value = result;
// }