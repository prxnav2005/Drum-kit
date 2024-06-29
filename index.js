const drumButtons = document.querySelectorAll(".drum");

function playSound(character) {
    switch (character) {
        case "w":
            const kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "a":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            const tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "j":
            const tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "k":
            const tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(character);
    }
}

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },250);
}