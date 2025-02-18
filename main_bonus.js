const buttonEl = document.querySelector(".button")
console.log(buttonEl);

const imageEl = document.querySelector(".image")
console.log(imageEl);

buttonEl.addEventListener("click", function(){
    //console.log("Button Clicked");
    imageEl.src="./img/yellow_lamp.png"
    buttonEl.innerHTML = "Spegni"
    }
)

/* buttonEl.addEventListener("click", function(){
    imageEl.src="./img/white_lamp.png"
    buttonEl.innerHTML = "Accendi"
}) */