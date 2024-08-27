"use strict"

var play = document.querySelector(".home__button");
play.addEventListener('click', function(){
    var home = document.querySelector(".home");
    home.classList.add('hidden');
})

/*parallax*/
document.addEventListener("mousemove", parallax);

function parallax(event){
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let windowwidth = window.innerWidth;
    let windowheight = window.innerHeight;
    let percentX = (mouseX / windowwidth) * 100;
    let percentY = (mouseY / windowheight) * 100;
    let backlayer = document.querySelector(".home");
    let middlelayer1 = document.querySelector(".home__lights--left");
    let middlelayer2 = document.querySelector(".home__lights--right");
    let frontlayer1 = document.querySelector(".home__foreground--crowd");
    let frontlayer2 = document.querySelector(".home__foreground--spots");
    
    backlayer.style.backgroundPosition = percentX * -0.1 + "% " + percentY * -0.1 + "%";
    middlelayer1.style.backgroundPosition = percentX * -0.2 + "% " + percentY * -0.1 + "%";
    middlelayer2.style.backgroundPosition = percentX * -0.2 + "% " + percentY * -0.1 + "%";
    frontlayer1.style.backgroundPosition = percentX * -0.4 + "% " + percentY * -0.2 + "%";
    frontlayer2.style.backgroundPosition = percentX * -0.4 + "% " + percentY * -0.2 + "%";
}

/*slider*/


let nextButton = document.querySelector(".intro__el--show");

document.addEventListener("click", nextSlide);

//navigation au clavier
document.addEventListener("keydown", keyboardListener);

function keyboardListener(event) {
    if(event.code == "ArrowRight") {
        nextSlide();
    }
}

function nextSlide() {
    let activeSlideEl = document.querySelector(".intro__el--show");
    let nextSlideEl = activeSlideEl.nextElementSibling;
    if(!nextSlideEl) {
        nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }
    activeSlideEl.classList.remove("intro__el--show");
    nextSlideEl.classList.add("intro__el--show");
    console.log(nextSlideEl);
}

var startgame = document.querySelector(".intro__el--last");
startgame.addEventListener('click', function(){
    var intro = document.querySelector(".intro");
    intro.classList.add('hidden');
})

