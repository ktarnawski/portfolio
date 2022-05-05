const burgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const allNavLi = document.querySelectorAll(".nav__links-link");

const closeNav = () => {
	nav.classList.remove("show-nav");
	burgerBtn.classList.remove("is-active");
};

const handleBurger = () => {
	burgerBtn.classList.toggle("is-active");
	nav.classList.toggle("show-nav");
};

burgerBtn.addEventListener("click", handleBurger);
allNavLi.forEach((li) => li.addEventListener("click", closeNav));
