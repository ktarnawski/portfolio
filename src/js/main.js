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
