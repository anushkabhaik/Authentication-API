let headingE1 = document.getElementById("headingElement");
let changeBtnE1 = document.getElementById("changebtn");
function onChangingheading(){
    headingE1.textContent = "4.0 technologies";
    headingE1.style.color = "red";
}

changeBtnE1.addEventListener(click,onChangingheading);