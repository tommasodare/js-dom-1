/* const buttonEl = document.querySelector(".button")
console.log(buttonEl);

const imageEl = document.querySelector(".image")
console.log(imageEl);

const changeLamp = buttonEl.addEventListener("click", function(){
    //console.log("Button Clicked");
    imageEl.src="./img/yellow_lamp.png"
    buttonEl.innerHTML = "Spegni"
    }
) */

/* buttonEl.addEventListener("click", function(){
    imageEl.src="./img/white_lamp.png"
    buttonEl.innerHTML = "Accendi"
}) */

/* changeLamp.addEventListener("click", function(){
    imageEl.src="./img/white_lamp.png"
    buttonEl.innerHTML = "Accendi"
}) */

/* if (changeLamp.includes("Spegni")) {
    imageEl.src="./img/white_lamp.png"
    buttonEl.innerHTML = "Accendi"
} */

const lampEl = document.querySelector(".lamp")
const buttonEl = document.getElementById("toggleButton")

let isOn = false

buttonEl.addEventListener("click", function(){
    isOn = !isOn
    if(isOn) {
        lampEl.src="./img/yellow_lamp.png"
        buttonEl.innerHTML= "Spegni"
    } else {
        lampEl.src="./img/white_lamp.png"
        buttonEl.innerHTML= "Accendi"
    }
})