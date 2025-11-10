const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [5729]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerText = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerText = "NOT OK";
    phoneResult.style.color = "RED";
  }
};

//lesson 3 TAB SLIDER
//HOMEWORK 3

const tabsParent = document.querySelector(".tab_content_items");
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");

const hideTabContent = () => {
  tabContentBlocks.forEach((block) => {
    block.style.display = "none";
  });
  tabs.forEach((tab) => {
    tab.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (blockIndex = 0) => {
  tabContentBlocks[blockIndex].style.display = "block";
  tabs[blockIndex].classList.add("tab_content_item_active");
};

let currentIndex = 0;
hideTabContent();
showTabContent(currentIndex);

//HOMEWORK 3
//AUTO TABS SWITCH EVERY 3 SEC
let autoSwitch; // timer

const tabsSwitch = () => {
  clearInterval(autoSwitch); // clear old timer
  autoSwitch = setInterval(() => {
    currentIndex++;
    if (currentIndex >= tabs.length) currentIndex = 0;
    hideTabContent();
    showTabContent(currentIndex);
  }, 3000);
};
tabsSwitch();

tabsParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabs.forEach((tab, index) => {
      if (event.target === tab) {
        currentIndex = index; //update index on clicked
        hideTabContent();
        showTabContent(index);
        tabsSwitch(); //restart
      }
    });
  }
};

//lesson 5
//HOMEWORK 5

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const converter = (element, targetElement) => {
  element.oninput = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/converter.json");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();

    xhr.onload = () => {
      const data = JSON.parse(xhr.response);

      if (element.id === "som") {
        usdInput.value = (element.value / data.usd).toFixed(2);
        eurInput.value = (element.value / data.eur).toFixed(2);
      }
      if (element.id === "usd") {
        somInput.value = (element.value * data.usd).toFixed(2);
        eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
      }

      if (element.id === "eur") {
        somInput.value = (element.value * data.eur).toFixed(2);
        usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
      }

      if (element.value === "") {
        somInput.value = "";
        usdInput.value = "";
        eurInput.value = "";
      }
    };
  };
};

converter(somInput, usdInput);
converter(usdInput, somInput);
converter(eurInput, somInput);
