const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".depth-wrap");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
