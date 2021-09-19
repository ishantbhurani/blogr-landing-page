const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const connect = document.querySelector("#connect");

menuOpen.addEventListener("click", () => {
  menu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

connect.addEventListener("click", function () {
  this.classList.toggle("active");
});
