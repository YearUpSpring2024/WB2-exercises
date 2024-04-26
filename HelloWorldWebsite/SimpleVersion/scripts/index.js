"use script";

window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = OnHelloClicked;
    console.log('index.js init() excecuted');
}

function OnHelloClicked() {
    alert("hi there");

    console.log('index.js onHellocliked executed');
}