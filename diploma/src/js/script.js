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

		let newMainCardsItem;

		readyBtn.addEventListener('click', function(event) {
			if (isNaN(inputBio.value) && isNaN(inputName.value) && inputName.value != '' && inputAge.value.length == 2 && inputAge.value != '' && inputBio.value != '' && inputAge.value >= 35 && inputAge.value <= 80) {

			newMainCardsItem = mainCardsItem[1].cloneNode(true);
			mainCards.appendChild(newMainCardsItem);
			let candidatePhoto = document.querySelectorAll('.photo')[2];
			let candidateName = document.querySelectorAll('.name')[2];
			let candidateAge = document.querySelectorAll('.age')[2];
			let candidateSex = document.querySelectorAll('.sex')[2];
			let candidateViews = document.querySelectorAll('.views')[2];
			let candidateBio = document.querySelectorAll('.bio')[2];
			console.log(inputAge.value.length);
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
						let age = inputAge.value.split('');
												if(age[1] == 1) {
													candidateAge.innerHTML = `${inputAge.value} год`;
												} else if (age[1] > 1 && age[1] < 5) {
													candidateAge.innerHTML = `${inputAge.value} года`;
												} else if (age[1] > 5 && age[1] < 9) {
													candidateAge.innerHTML = `${inputAge.value} лет`;
												} else if (age[1] == 0) {
													candidateAge.innerHTML = `${inputAge.value} лет`;
												};

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
					progressBar[i].style.height = '0.00%';
					};
					let resultCount = document.querySelectorAll('.result-count');
					for (let i = 0; i < resultCount.length; i++ ) {
					resultCount[i].innerHTML = '0.00%';
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

		resetBtn.addEventListener('click', function() {
			newMainCardsItem.remove();
		});
		resetBtn.addEventListener('click', toCustomize);

		let cleaner = document.querySelector('.cleaner-btn');


		cleaner.addEventListener('click', function() {
			let resetInput = document.getElementsByClassName('reset-input');
			for (let i = 0; i < resetInput.length; i++ ) {
				resetInput[i].value = '';
			}
		})

		//Провести честное голосование
		let votingBtn = document.querySelector('#voting');

		votingBtn.addEventListener('click', function() {
			let progressBar = document.querySelectorAll('.progress-bar');
			let resultCount = document.querySelectorAll('.result-count');
			
			function randomVotes() {
				let a = getrand(0, 100);
				let b = 100 - a;
				b = getrand(0, b);
				let c = 100 - (a + b);
				a = a.toFixed(2);
				b = b.toFixed(2);
				c = c.toFixed(2);
				console.log('a = ' + a);
				console.log('b = ' + b);
				console.log('c = ' + c);

				progressBar[0].style.height = `${a}%`;
				progressBar[1].style.height = `${b}%`;
				progressBar[2].style.height = `${c}%`;
				resultCount[0].innerHTML = `${a}%`;
				resultCount[1].innerHTML = `${b}%`;
				resultCount[2].innerHTML = `${c}%`;


			};
			randomVotes();


		});

			//вмешаться в выборы

			let crimeBtn = document.querySelector('#crime');


			crimeBtn.addEventListener('click', function() {
				let progressBar = document.querySelectorAll('.progress-bar');
				let resultCount = document.querySelectorAll('.result-count');
				let a = parseInt(progressBar[0].style.height);
				let b = parseInt(progressBar[1].style.height);
				let c = parseInt(progressBar[2].style.height);

				let multiplier;


				if (a != 0 && b != 0 && c != 0) {
					if (a > b && c <= 75) {
					multiplier = (a / b).toFixed(2);
					console.log(multiplier);
					smallPart = (25 / multiplier).toFixed(2);
					bigPart = (25 - smallPart).toFixed(2);
					a = (a - bigPart).toFixed(2);;
					b = (b - smallPart).toFixed(2);;
					c = (c + 25).toFixed(2);


				} else if (a < b && c <= 75) {
					multiplier = (b / a).toFixed(2);
					console.log(multiplier);
					smallPart = (25 / multiplier).toFixed(2);
					bigPart = (25 - smallPart).toFixed(2);
					a = (a - smallPart).toFixed(2);;
					b = (b - bigPart).toFixed(2);;
					c = (c + 25).toFixed(2);
			

				} else if(a == 0 && c <= 75) {
					a = a.toFixed(2);
					b = (b - 25).toFixed(2);
					c = (c + 25).toFixed(2);
				} else if (b == 0 && c <= 75) {
					a = (a - 25).toFixed(2);
					b = b.toFixed(2);
					c = (c + 25).toFixed(2);
				} else if (c <= 75) {
					a = (a - 12.5).toFixed(2);;
					b = (b - 12.5).toFixed(2);;
					c = (c + 25).toFixed(2);

				};
				progressBar[0].style.height = `${a}%`;
				progressBar[1].style.height = `${b}%`;
				progressBar[2].style.height = `${c}%`;
				resultCount[0].innerHTML = `${a}%`;
				resultCount[1].innerHTML = `${b}%`;
				resultCount[2].innerHTML = `${c}%`;





				// function randomVotes() {
				// 	let a = getrand(0, 75);
				// 	let b = 75 - a;
				// 	b = getrand(0, b);
				// 	let c = 75 - (a + b);
				// 	c= 25 + c;
				// a = a.toFixed(2);
				// b = b.toFixed(2);
				// c = c.toFixed(2);


				// 	progressBar[0].style.height = `${a}%`;
				// 	progressBar[1].style.height = `${b}%`;
				// 	progressBar[2].style.height = `${c}%`;
				// 	resultCount[0].innerHTML = `${a}%`;
				// 	resultCount[1].innerHTML = `${b}%`;
				// 	resultCount[2].innerHTML = `${c}%`;


				// };
				// randomVotes();

				}


				




		});



	})
