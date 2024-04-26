"use strict";

window.onload = init;

function init() {
    const btnClick = document.getElementById("greetBtn");
    btnClick.onclick = onGreetUserButtonClicked;
}

function onGreetUserButtonClicked() {
    const name = document.getElementById("nameField").value;
    alert(`hello ${name}`)
}