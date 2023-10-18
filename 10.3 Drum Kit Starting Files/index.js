//adding animation to buttons
function animateButton(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}   

//element.addEventListener(event, function);

//detecting click
let btns = document.querySelectorAll(".drum");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        // this.style.color = "white";
         let btnInnerHTML = this.innerHTML;
            playSound(btnInnerHTML);
/*         
         switch(btnInnerHTML) {
                case "w":
                    let tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "a":
                    let tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "s":
                    let tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "d":
                    let tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "j":
                    let snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                case "k":
                    let crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                case "l":  
                     let kick = new Audio("sounds/kick-bass.mp3");
                     kick.play();
                     break;
                default:
                    console.log(btnInnerHTML);                       
         }
    */         
    });
} 

//detecting keyboard press
document.addEventListener("keydown", function(event){
         playSound(event.key);
         animateButton(event.key);
});

//based on clik or key press play sound
function playSound(key){
    switch(key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            animateButton(key);
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            animateButton(key);
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            animateButton(key);
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            animateButton(key);
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            animateButton(key);
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            animateButton(key);
            break;
        case "l":  
             let kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
             animateButton(key);
             break;
        default:
            console.log(btnInnerHTML);                       
 }    
}