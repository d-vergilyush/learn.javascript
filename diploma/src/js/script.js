	window.addEventListener('DOMContentLoaded', function () {

			//Modal
			let overlay = document.querySelector('.overlay');
			let create = document.querySelector('#popup-btn');
			let main = document.querySelector('.main');
			let custom = document.querySelector('.custom');
			let customTools = document.getElementsByClassName('custom-tools');

			function toCustomize() {
				overlay.classList.add('animated', 'fadeOut');
				setTimeout(function() {
					overlay.style.display = 'none';
				}, 1500);
				main.classList.add('animated','fadeOut');
				main.style.display = 'none';
				custom.style.display = 'flex';
				for (let i = 0; i < customTools.length; i++ ) {
				slideInDown.call(customTools[i])
				};

			}

			create.addEventListener('click', toCustomize);

		function slideInDown() {
			this.classList.add('animated','slideInDown');
			this.style.display = 'block';
		};

		//new candidate

		let readyBtn = document.querySelector('#ready');
		let mainCards = document.querySelector('.main-cards');
		let mainCardsItem = document.querySelectorAll('.main-cards-item');
		let inputName = document.querySelector('#name');
		let inputAge = document.querySelector('#age');
		let inputSex = document.querySelectorAll('[name = "sex"]');
		let inputViews = document.querySelector('#select');
		let inputBio = document.querySelector('#bio');
		let personSkin = document.querySelector('.person-skin');
		let personHair = document.querySelector('.person-hair');
		let personClothes = document.querySelector('.person-clothes');
		let skin, hair, clothes;
		let maleSkin = ['url(img/skin/skin-1.png)', 'url(img/skin/skin-2.png)', 'url(img/skin/skin-3.png)'];
		let femaleSkin = ['url(img/skin/skin-4.png)', 'url(img/skin/skin-5.png)', 'url(img/skin/skin-6.png)'];
		let maleHair = ['url(img/hair/construct/hair-1.png)', 'url(img/hair/construct/hair-2.png)', 'url(img/hair/construct/hair-3.png)'];
		let femaleHair = ['url(img/hair/construct/hair-4.png)', 'url(img/hair/construct/hair-5.png)', 'url(img/hair/construct/hair-6.png)'];
		let maleClothes = ['url(img/clothes/construct/clothes-1.png)', 'url(img/clothes/construct/clothes-2.png)', 'url(img/clothes/construct/clothes-3.png)'];
		let femaleClothes = ['url(img/clothes/construct/clothes-4.png)', 'url(img/clothes/construct/clothes-5.png)', 'url(img/clothes/construct/clothes-6.png)'];

		function getrand(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		if (inputSex[0].checked) {
			skin = maleSkin;
			hair = maleHair;
			clothes = maleClothes;
		} else if(inputSex[1].checked) {
			skin = femaleSkin;
			hair = femaleHair;
			clothes = femaleClothes;
		};

		chooseSkin();
		chooseHair();
		chooseСlothes();

		for (let i = 0; i < inputSex.length; i++) {
			inputSex[i].addEventListener('change', () => {
		if (inputSex[0].checked) {
			skin = maleSkin;
			hair = maleHair;
			clothes = maleClothes;
		} else if(inputSex[1].checked) {
			skin = femaleSkin;
			hair = femaleHair;
			clothes = femaleClothes;
		};
				chooseSkin();
				chooseHair();
				chooseСlothes();
			})
		};


		function chooseSkin() {
			let slides = document.querySelectorAll('.skin-color');
			let slideIndex = getrand(1, slides.length);
			let prev = document.querySelectorAll('.prev')[0];
			let next = document.querySelectorAll('.next')[0];

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
				slides[slideIndex - 1].style.display = '';
				personSkin.style.backgroundImage = skin[slideIndex - 1];

			}

			//функция для перелистывания
			function plusSlides(n) {
				showSlides(slideIndex += n)	
			}

			prev.addEventListener('click', () => {
				plusSlides(-1);
			});
			next.addEventListener('click', () => {
				plusSlides(1);
			});
		};

		function chooseHair() {

			let slides = document.getElementsByClassName('hair-style');
			slides.slice = [].slice;
			let maleSlides = slides.slice(0, 3);
			let femaleSlides = slides.slice(3);
			if (inputSex[0].checked) {
				slides = maleSlides;
			} else if(inputSex[1].checked) {
				slides = femaleSlides;
			};

			let slideIndex = getrand(1, slides.length);
			let prev = document.querySelectorAll('.prev')[1];
			let next = document.querySelectorAll('.next')[1];
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
				if (inputSex[0].checked) {
					for (let i = 0; i < slides.length; i++) {
					femaleSlides[i].style.display = 'none';
				};
				} else {
					for (let i = 0; i < slides.length; i++) {
					maleSlides[i].style.display = 'none';
				};
				};
				slides[slideIndex - 1].style.display = 'block';
				personHair.style.backgroundImage = hair[slideIndex - 1];

			}

			//функция для перелистывания
			function plusSlides(n) {
				showSlides(slideIndex += n)	
			}

			prev.addEventListener('click', () => {
				plusSlides(-1);
			});
			next.addEventListener('click', () => {
				plusSlides(1);
			});
		};


		function chooseСlothes() {

			let slides = document.getElementsByClassName('clothes-style');
			slides.slice = [].slice;
			let maleSlides = slides.slice(0, 3);
			let femaleSlides = slides.slice(3);
			if (inputSex[0].checked) {
				slides = maleSlides;
			} else if(inputSex[1].checked) {
				slides = femaleSlides;
			};

			let slideIndex = getrand(1, slides.length);
			let prev = document.querySelectorAll('.prev')[2];
			let next = document.querySelectorAll('.next')[2];
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
				if (inputSex[0].checked) {
					for (let i = 0; i < slides.length; i++) {
					femaleSlides[i].style.display = 'none';
				};
				} else {
					for (let i = 0; i < slides.length; i++) {
					maleSlides[i].style.display = 'none';
				};
				};
				slides[slideIndex - 1].style.display = 'block';
				personClothes.style.backgroundImage = clothes[slideIndex - 1];

			}

			//функция для перелистывания
			function plusSlides(n) {
				showSlides(slideIndex += n)	
			}

			prev.addEventListener('click', () => {
				plusSlides(-1);
			});
			next.addEventListener('click', () => {
				plusSlides(1);
			});
		};

		readyBtn.addEventListener('click', (event) => {
			if (isNaN(inputBio.value) && isNaN(inputName.value) && inputName.value != '' && inputAge.value != '' && inputBio.value != '' && inputAge.value >= 18 && inputAge.value <= 70) {

			let newMainCardsItem = mainCardsItem[1].cloneNode(true);
			mainCards.appendChild(newMainCardsItem);
			let candidatePhoto = document.querySelectorAll('.photo')[2];
			let candidateName = document.querySelectorAll('.name')[2];
			let candidateAge = document.querySelectorAll('.age')[2];
			let candidateSex = document.querySelectorAll('.sex')[2];
			let candidateViews = document.querySelectorAll('.views')[2];
			let candidateBio = document.querySelectorAll('.bio')[2];

				transferCustomInfo();
				resetResultCount();
				custom.style.display = 'none';
				main.style.display = '';
				main.classList.add('fadeIn');
				main.classList.remove('fadeOut');
				for (let i = 0; i < mainCardsItem.length; i++ ) {
					slideInDown.call(mainCardsItem[i])
				};
				slideInDown.call(newMainCardsItem);

				function transferCustomInfo() {
					if (isNaN(inputName.value)) {
						candidateName.innerHTML = inputName.value;
						candidateAge.innerHTML = `${inputAge.value} лет`;
						candidateBio.innerHTML = inputBio.value;
					}

					if (inputSex[0].checked) {
						candidateSex.innerHTML = 'Мужской';
					} else candidateSex.innerHTML = 'Женский';
				};

				function resetResultCount() {
					candidateViews.innerHTML = inputViews.options[inputViews.selectedIndex].value;
					let progressBar = document.querySelectorAll('.progress-bar');
					for (let i = 0; i < progressBar.length; i++ ) {
					progressBar[i].style.height = '0%';
					};
					let resultCount = document.querySelectorAll('.result-count');
					for (let i = 0; i < resultCount.length; i++ ) {
					resultCount[i].innerHTML = '0%';
					};
				};

				candidatePhoto.classList.remove('photo-2');
				candidatePhoto.style.cssText =   `background-image: ${personHair.style.backgroundImage}, \
																					${personClothes.style.backgroundImage}, \
																					${personSkin.style.backgroundImage};
																				   `;
			   }
		});


		//Сбросить результаты
		let resetBtn = document.querySelector('#reset');


		resetBtn.addEventListener('click', toCustomize);
		// resetBtn.addEventListener('click', function() {
		// 	// let worthlessCandidate = document.querySelectorAll('.main-cards-item')[2];
		// 	console.log(inputName);
		// 	let resetInput = document.getElementsByClassName('reset-input');
		// 	for (let i = 0; i < resetInput.length; i++ ) {
		// 		resetInput[i].value = '';
		// 	}
			

		// })


	})
