document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper", {
		slidesPerView: 1,
		speed: 2000,
		autoplay: {
			delay: 4000,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		loop: true,
	});
	const review = new Swiper(".review", {
		slidesPerView: 1,
		loop: true,
		// spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 768px
			1280: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 5,
			},
		},
	});
	const events = new Swiper(".events", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});

	const introEvents = new Swiper(".introEvents", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "bullets",
		// 	clickable: true,
		// },
	});


	if (document.getElementById("copyrightDate"))
		document.getElementById("copyrightDate").innerHTML = "\u00A9 " + " " + document.getElementById("copyrightDate").innerHTML + " " + new Date().getFullYear();
});

window.onload = function () {
	// const loader = document.querySelector(".loader");

	resizeWindow();

	// loader.classList.add("animate-hidden");

	window.addEventListener("resize", resizeWindow);
	function resizeWindow() {
		const fitText = document.querySelectorAll("[data-fit-text]");
		if (fitText.length) {
			fitText.forEach((el) => {
				let scale = el.getAttribute("scale");
				if (scale === null) scale = 1;
				// console.log(scale);
				const font = window.getComputedStyle(el).fontSize + " " + window.getComputedStyle(el).fontFamily.substring(0, window.getComputedStyle(el).fontFamily.indexOf(","));
				const fontSize = window.getComputedStyle(el).fontSize.substring(0, window.getComputedStyle(el).fontSize.indexOf("px"));
				const kf = el.clientWidth / getTextWidth(el.innerText, font);
				el.style.fontSize = fontSize * kf * scale - 0.09 + "px";
			});
		}

		// document.getElementById("hangPoint").style.marginBottom = Number(document.getElementById("hang").offsetHeight) + "px";
	}

	function getTextWidth(text, font) {
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		ctx.font = font;
		var width = ctx.measureText(text).width;
		return width;
	}
};
