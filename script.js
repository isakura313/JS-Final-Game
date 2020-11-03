const button = document.getElementById("startGameBtn");

const level = document.getElementById("gameLevels");

let StartDisplay = document.querySelector("#StartDisplay");

let easyLevelCard = document.querySelector(".easy__lvl");
let middleLevelCard = document.querySelector(".middle__lvl");
let hardLevelCard = document.querySelector(".hard__lvl");

let allCardImg = document.querySelectorAll(" .cards_1lvl .card__img ");
let cardFront = document.querySelectorAll(".card__front");
let cardBack = document.querySelectorAll(".card__back");

console.log(allCardImg);

button.addEventListener("click", (e) => {
  if (level[0].checked) {
    StartDisplay.classList.toggle("hiden");
    easyLevelCard.classList.remove("hiden");
    // startGame();
  } else if (level[1].checked) {
    StartDisplay.classList.toggle("hiden");
    middleLevelCard.classList.remove("hiden");
  } else if (level[2].checked) {
    StartDisplay.classList.toggle("hiden");
    hardLevelCard.classList.remove("hiden");
  }
});

let cards = [...allCardImg];

console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", (e) => {
    cardFront[i].classList.add("hiden");
    cardBack[i].classList.remove("hiden");
  });
}

//создать функцию которая на одну из карточек будет вешать класс с багом , на все остальные окончание игры, рандомно

// создать функцию , которая при повторном нажатии на карту возвращает на начальный экран (StartDisplay) и позволяет заново сыграть

//  сделать что-то чтобы была возможность выбрать только одну карту а не все по очереди
