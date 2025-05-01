function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridien = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} ${meridien}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

const bouton = document.getElementById("bouton");
const menu = document.getElementById("list");
const block = document.getElementById("monBlock");
bouton.onclick = function () {
  if (menu.className === "menu") {
    menu.className += "responsive";
    menu.style.display = "block";
  } else {
    menu.className = "menu";
    menu.style.display = "none";
  }
};

let current = 0,
  slides = document.querySelectorAll(".phrase-pre");

setInterval(function () {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  current = current != slides.length - 1 ? current + 1 : 0;
  slides[current].style.display = "block";
}, 8000);

const bouton2 = document.getElementById("bouton2");
const paragraphe = document.getElementById("paragraphe");
const articleTitre = document.getElementById("articleTitre");
const videoIa = document.getElementById("pluSurIA");
bouton2.onclick = function () {
  articleTitre.textContent = "Decouvrez l'IA ";
  paragraphe.textContent = `l'inteligence artificiel nous ouvre ses secrets \n dans ce Lien si desous`;
  videoIa.style.display = "block";
};
