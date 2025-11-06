//GMAIL

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-z]+\d*[a-z]*@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerText = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "NOT OK";
    gmailResult.style.color = "red";
  }
};

//HOMEWORK 1 (PART 2 - MOVE BLOCK)
//HOMEWORK 2

const childBlock = document.querySelector("#child_block");
const parentBlock = document.querySelector(".parent_block");

const width = parentBlock.clientWidth - childBlock.offsetWidth;
const height = parentBlock.clientHeight - childBlock.offsetHeight;

let distanceX = 0;
let distanceY = 0;

const move = () => {
  if (distanceX < width && distanceY === 0) distanceX++;
  else if (distanceX === width && distanceY < height) distanceY++;
  else if (distanceX > 0 && distanceY === height) distanceX--;
  else if (distanceX === 0 && distanceY > 0) distanceY--;

  childBlock.style.left = `${distanceX}px`;
  childBlock.style.top = `${distanceY}px`;
  requestAnimationFrame(move);
};

move();

//HOMEWORK 2 (TIMER)
const timer = document.querySelector("#seconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let seconds = 0;
let interval = null;

startButton.onclick = () => {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    requestAnimationFrame((timer.innerText = seconds));
  }, 1000);
};

stopButton.onclick = () => {
  clearInterval(interval);
  interval = null;
};

resetButton.onclick = () => {
  clearInterval(interval);
  seconds = 0;
  interval = null;
  requestAnimationFrame((timer.innerText = seconds));
};

//HOMEWORK 3 (CHARACTERS)

function getCharcters() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../data/characters.json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();

  xhr.onload = () => {
    const characters = JSON.parse(xhr.response);
    const cards = document.querySelectorAll(".character-card");

    characters.forEach((character, index) => {
      const card = cards[index];
      card.querySelector(".character-name").innerHTML = character.name;
      card.querySelector(".caracter-age").innerHTML = `Age: ${character.age}`;
      card.querySelector(".character-photo").src = character.photo;
    });
  };
}
getCharcters();

//HOMEWORK 3 (bio.json)

function getMyData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../data/bio.json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();

  xhr.onload = () => {
    const bio = JSON.parse(xhr.response);
    console.log(bio);
  };
}
getMyData();
