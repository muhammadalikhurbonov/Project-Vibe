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



function clickFunctionss() {
  document.querySelector(".section_fourteen_itemm").style.display = "none";
  document.querySelector(".section_fourteen_item").style.display = "block";
}

function clickFunctions() {
  document.querySelector(".section_fourteen_itemm").style.display = "block";
  document.querySelector(".section_fourteen_item").style.display = "none";
}
