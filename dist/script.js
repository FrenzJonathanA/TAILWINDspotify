const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arJAY = document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("z-index:999");
  headerNav.style=("transition:.5s ease");
  arJAY.classList.toggle("show");
});

const spotiFY = document.querySelectorAll(".item__top")
const spot = document.querySelector(".item ul");
spotiFY.forEach((premium) => {
    premium.addEventListener("click", () => {
        premium.nextElementSibling.classList.toggle("open");
        premium.querySelector("i").classList.toggle("open");
        spot.style=("transition:.5s ease");
    })
})