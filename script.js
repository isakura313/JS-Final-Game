const button = document.getElementById('startGameBtn');

const level = document.getElementById('gameLevels');


let StartDisplay = document.querySelector('#StartDisplay');

let easyLevelCard = document.querySelector('.easy__lvl');
let middleLevelCard = document.querySelector('.middle__lvl');
let hardLevelCard = document.querySelector('.hard__lvl');


button.addEventListener('click', e => {

  if (level[0].checked) {
    StartDisplay.classList.toggle("hiden");
    easyLevelCard.classList.remove("hiden");
  }

  else if (level[1].checked) {
    
    StartDisplay.classList.toggle("hiden");
    middleLevelCard.classList.remove("hiden");
    
  }

  else if (level[2].checked) {
    StartDisplay.classList.toggle("hiden");
    hardLevelCard.classList.remove("hiden");
  }

});