const toggleBtn = document.querySelector(".nav-toggle-btn");
const menu = document.querySelector(".depth-wrap");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
