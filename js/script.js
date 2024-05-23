var searchBtn = document.querySelector("#search-btn");
var searchForm = document.querySelector(".header .search-form");
var navbar = document.querySelector(".navbar .header");
var menuBtn = document.querySelector("#menu-btn");

searchBtn.onclick = () => {
	searchBtn.classList.toggle("fa-times");
	searchForm.classList.toggle("active");
	menuBtn.classList.remove("fa-times");
	navbar.classList.remove("active");
};

menuBtn.onclick = () => {
	menuBtn.classList.toggle("fa-times");
	navbar.classList.toggle("active");
	searchBtn.classList.remove("fa-times");
	searchForm.classList.remove("active");
};

window.onscroll = () => {
	searchBtn.classList.remove("fa-times");
	searchForm.classList.remove("active");
	menuBtn.classList.remove("fa-times");

	if (window.scrollY > 650) {
		document.querySelector(".header").classList.add("active");
	} else {
		document.querySelector(".header").classList.remove("active");
	}

	let value = window.scrollY / 10;
	document.querySelector(".home .mountain").style.bottom = `${-value}%`;
	document.querySelector(".home .content").style.bottom = `${value}%`;
	document.querySelector(".home .moon").style.marginTop = `${-value}%`;
	document.querySelector(".home .cloud-1").style.right = `${-value}%`;
	document.querySelector(".home .cloud-2").style.left = `${-value}%`;
};
