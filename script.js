// SCRIPT.JS

let currentPage = 0;

const pages = document.querySelectorAll(".page");

function nextPage(){

pages[currentPage].classList.remove("active");

currentPage++;

if(currentPage >= pages.length){
currentPage = pages.length - 1;
}

pages[currentPage].classList.add("active");

}

function openLetter(){

document.querySelector(".envelope").classList.add("open");

document.getElementById("letterNext").classList.remove("hidden");

}

const slides = document.querySelectorAll(".slide");

const texts = [
"I regret hurting you...",
"You deserve soft love ❤️",
"I still choose you ✨",
"Please forgive me 🥺"
];

let slideIndex = 0;

const typeText = document.querySelector(".typeText");

function carousel(){

slides.forEach(slide=>{
slide.classList.remove("activeSlide");
});

slideIndex++;

if(slideIndex >= slides.length){
slideIndex = 0;
}

slides[slideIndex].classList.add("activeSlide");

typeText.innerHTML = texts[slideIndex];

}

setInterval(carousel,3000);

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

if(music.paused){
music.play();
musicBtn.innerHTML = "🎵";
}else{
music.pause();
musicBtn.innerHTML = "🔇";
}

});

document.body.addEventListener("click",()=>{

music.play();

},{once:true});
