"use strick";
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function clickFunctions() {
  document.querySelector(".none").style.display = "block";
  document.querySelector(".section_fourteen_item").style.display = "none";
}

function clickFunctionss() {
  document.querySelector(".none").style.display = "none";
  document.querySelector(".section_fourteen_item").style.display = "block";
}
