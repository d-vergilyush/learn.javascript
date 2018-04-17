function slider() {

	let slideIndex = 1;
	let slides = document.getElementsByClassName('slider-item');
	let prev = document.querySelector('.prev');
	let next = document.querySelector('.next');
	let dotsWrap = document.querySelector('.slider-dots');
	let dots = document.querySelectorAll('.dot');

	showSlides(slideIndex);

	// функция показа текущего слайда
	function showSlides(n) {
		if (n > slides.length) {
				slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};
		slides[slideIndex - 1].style.display = '';
		dots[slideIndex - 1].classList.add('dot-active');
	}
	////////

	//функция для перелистывания
	function plusSlides(n) {
		showSlides(slideIndex += n)	
	}
	///////

	// функция для получения текущего слайда
	function currentSlide(n) {
		showSlides(slideIndex = n);

	};

	prev.addEventListener('click', () => {
		plusSlides(-1);
	});

	next.addEventListener('click', () => {
		plusSlides(1);
	});

	let autoShowNextSlide = setTimeout(autoPlusSlides, 4000);
	function autoPlusSlides () {
		showSlides(slideIndex += 1);
		autoShowNextSlide = setTimeout(autoPlusSlides, 4000);
	};

	dotsWrap.addEventListener('click', event => {
		for (let i = 1; i <= dots.length; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
		}
	});

}

module.exports = slider;