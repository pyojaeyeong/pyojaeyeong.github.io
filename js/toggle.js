const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".main-wrap");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
