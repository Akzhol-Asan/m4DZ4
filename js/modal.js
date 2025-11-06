//Lesson 3
const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector("#btn-get");
const modalCloseTrigger = document.querySelector(".modal_close");

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

modalTrigger.onclick = openModal;
modalCloseTrigger.onclick = closeModal;
modal.onclick = (event) => event.target === modal && closeModal();

//HOMEWORK 3

//OPEN MODAL AFTER 10 SEC
const modalInterval = setInterval(() => {
  openModal();
  clearInterval(modalInterval);
}, 10000);

//OPEN MODAL AT THE END OF THE PAGE
window.addEventListener("scroll", function onScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
    openModal();
    window.removeEventListener("scroll", onScroll);
  }
});
