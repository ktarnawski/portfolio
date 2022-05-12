const burgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const allNavLi = document.querySelectorAll(".nav__links-link");
const colorButton = document.querySelector(".style-selector__color-button");
const themeButton = document.querySelector(".style-selector__theme-button");
const styleSelector = document.querySelector(".style-selector");
const allStyles = document.querySelectorAll(".alt-style");

const handleDarkLightIcon = () => {
	themeButton.querySelector("i").classList.toggle("fa-sun");
	themeButton.querySelector("i").classList.toggle("fa-moon");
	document.body.classList.toggle("dark");
};

const handleDarkLightIconOnLoad = () => {
	if (document.body.classList.contains("dark")) {
		themeButton.querySelector("i").classList.add("fa-sun");
	} else {
		themeButton.querySelector("i").classList.add("fa-moon");
	}
};

const handleStyleSelector = () => {
	styleSelector.classList.toggle("open");
};

const hideStyleSelectorOnScroll = () => {
	if (styleSelector.classList.contains("open")) {
		styleSelector.classList.remove("open");
	}
};

const setActiveStyle = (color) => {
	allStyles.forEach((style) => {
		if (color === style.getAttribute("title")) {
			style.removeAttribute("disabled");
		} else {
			style.setAttribute("disabled", "true");
		}
	});
};

const closeNav = () => {
	nav.classList.remove("show-nav");
	burgerBtn.classList.remove("is-active");
};

const handleBurger = () => {
	burgerBtn.classList.toggle("is-active");
	nav.classList.toggle("show-nav");
};

$(".progress .progress-in").each(function () {
	$(this)
		.stop(true, true)
		.delay($(this).attr("data-delay"))
		.animate(
			{
				width: $(this).attr("data-progress") + "%",
			},
			1000
		);
});

burgerBtn.addEventListener("click", handleBurger);
allNavLi.forEach((li) => li.addEventListener("click", closeNav));
colorButton.addEventListener("click", handleStyleSelector);
themeButton.addEventListener("click", handleDarkLightIcon);
window.addEventListener("scroll", hideStyleSelectorOnScroll);
window.addEventListener("load", handleDarkLightIconOnLoad);
