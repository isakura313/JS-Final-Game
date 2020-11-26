const button = document.getElementById("startGameBtn");

const level = document.getElementById("gameLevels");

let StartDisplay = document.querySelector("#StartDisplay");

let easyLevelCard = document.querySelector(".easy__lvl ");
let middleLevelCard = document.querySelector(".middle__lvl");
let hardLevelCard = document.querySelector(".hard__lvl");


const levelJS = document.querySelectorAll(".level-js");
const cards = document.querySelectorAll("  .card__img ");



let cardFront = document.querySelectorAll(".card__front");
let cardBack = document.querySelectorAll(".card__back");

function generateRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

button.addEventListener("click", (e) => {
  if (level[0].checked) {
    StartDisplay.classList.toggle("hiden");
    easyLevelCard.classList.remove("hiden");
  
    
  } else if (level[1].checked) {
    StartDisplay.classList.toggle("hiden");
    middleLevelCard.classList.remove("hiden");

    
  } else if (level[2].checked) {
    StartDisplay.classList.toggle("hiden");
    hardLevelCard.classList.remove("hiden");

  }
  
});

function getLevel() {
   
}

generateCards();

function generateCards() {
  const randomNumber = generateRandomNumber(cards.length);
  cards[randomNumber].classList.add("active");
  
  cards.forEach(card => {
    const cardFront = card.querySelector(".card__front");
    const cardBack = card.querySelector(".card__back");
  
    function cardEventPageClose() {
      console.log("cardEventPageClose");
      StartDisplay.classList.remove("hiden");
      generateCards();
      card.classList.remove("active");
      cardFront.classList.remove("hidden");
      easyLevelCard.classList.add("hiden");
      middleLevelCard.classList.add("hiden");
      hardLevelCard.classList.add("hiden");
      card.removeEventListener("click", cardEventPageClose);
    }
  
    function cardEventFunction(e) {
      cardFront.classList.add("hiden");
      cardBack.classList.remove("hiden");
      // cards.forEach((card1, i) => {
      //   card1.onclick = function () { };
      // });
      card.addEventListener("click", cardEventPageClose);
      
    }
    card.onclick = cardEventFunction;
    
  });
}


