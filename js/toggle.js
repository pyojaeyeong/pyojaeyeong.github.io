const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".depth-wrap");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var acc_menu = this.nextElementSibling;
    if (acc_menu.style.display === "block") {
      acc_menu.style.display = "none";
    } else {
      acc_menu.style.display = "block";
    }
  });
}
