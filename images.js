let bulbimageEl = document.getElementById("bulb-image");
let catimageEl = document.getElementById("cat-image");
let switchTextEl = document.getElementById("switchText");
let offBtnEl = document.getElementById("off-btn");
let onBtnEl = document.getElementById("on-btn");

function onOffSwitch(){
    bulbimageEl.src = "bulb-go-off-img.png";
    catimageEl.src = "cat-eyes-img.png";
    switchTextEl.textContent="Off";
    offBtnEl.style.backgroundColor="red";
    onBtnEl.style.backgroundColor="green";
}

