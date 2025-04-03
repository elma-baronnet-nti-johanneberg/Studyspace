// skapar konstanter av classerna för att kunna använad de i js

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// gör så att man kan trycka på hamburgarmenyn och den kommer fram
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
})
// gör så att man kan ta bort menyn när man trycker på hamburgarmenyn igen
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

    
// inte min kod. anpassad från chat gpt: 
let timerInterval; 

document.getElementById("startTimer").addEventListener("click", function () {
    let selectedTime = parseInt(document.getElementById("timerSelect").value, 10); 
    startCountdown(selectedTime);
});

function startCountdown(duration) {
    let display = document.getElementById("timerDisplay");
    let timer = duration;
    let minutes, seconds;

    clearInterval(timerInterval); 

    timerInterval = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (timer <= 0) {
            clearInterval(timerInterval);
            display.textContent = "Tiden är slut!";
            alert("Tiden är slut!");
        } else {
            timer--;
        }
    }, 1000);
}
