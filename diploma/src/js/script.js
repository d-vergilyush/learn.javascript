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
				// for (let i = 0; i < customTools.length; i++ ) {
				// slideInDown.call(customTools[i])
				// };
				customTools[0].classList.add('animated','slideInDown');
				customTools[0].style.display = 'block';
				customTools[1].classList.add('animated','slideInUp');
				customTools[1].style.display = 'block';
				customTools[2].classList.add('animated','slideInDown');
				customTools[2].style.display = 'block';


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
		let personShoes = document.querySelector('.person-shoes');
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
		personShoes.style.backgroundImage = 'url(img/clothes/construct/shoes.png)';

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
		function newChooseWinnerFor() {
			mainCardsItem[0].classList.remove('main-cards-item-active');
			mainCardsItem[1].classList.remove('main-cards-item-active');
			newMainCardsItem.classList.remove('main-cards-item-active');
		};

		//ошибки при заполнении полей

		let errorMessage = document.createElement('div'); // создали новый элемент
	 	let customInfo = document.querySelector('.custom-info');
		customInfo.appendChild(errorMessage); //вставили этот элемент 
		customInfo.style.position = 'relative';
		errorMessage.classList.add('error-message'); //добавили класс menu-item
		let inputsArr = document.querySelectorAll('.reset-input');

		
		const pattern = /[^а-яё\s]/i;
		// const badPattern = /[a-z0-9_-]/i;


		// for(let i = 0; i < inputsArr.length; i++) {
		// 	inputsArr[i].addEventListener('focus', checkErrors);
		// 	inputsArr[i].addEventListener('change', checkErrors);

		// };

		inputName.addEventListener('focus', checkName);
		inputName.addEventListener('change', checkName);

		inputAge.addEventListener('focus', checkAge);
		inputAge.addEventListener('change', checkAge);

		inputBio.addEventListener('focus', checkBio);
		inputBio.addEventListener('change', checkBio);





		function checkName() {
				let a = inputName.value.replace(/^\s+/i, '');
				inputName.value = a;
				//console.log(inputName.value.length);
				if (inputName.value == '') {
				inputName.style.border = '2px solid rgba(176, 0, 2, 0.4)';
				inputName.style.transition = '1s';
				errorMessage.style.display = 'block';
				errorMessage.classList.add('animated','fadeIn');
				errorMessage.innerHTML = 'Заполните поле "Фамилия Имя Отчество"'; 
			} else if (!isNaN(inputName.value) || inputName.value.length < 2 || pattern.test(inputName.value )) {
					inputName.style.border = '2px solid rgba(176, 0, 2, 0.4)';
					inputName.style.transition = '1s';
					errorMessage.style.display = 'block';
					errorMessage.classList.add('animated','fadeIn');
					errorMessage.innerHTML = 'Введите не менее двух букв кириллицей в поле "Фамилия Имя Отчество"'; 
					} else {
						inputName.style.border = '';
						errorMessage.style.display = 'none';
					}
		};

		//--------------------------------------------------

		function checkAge() {
			if (inputAge.value == '') {
											inputAge.style.border = '2px solid rgba(176, 0, 2, 0.4)';
											inputAge.style.transition = '1s';
											errorMessage.style.display = 'block';
											errorMessage.classList.add('animated','fadeIn');
											errorMessage.innerHTML = 'Заполните поле "Возраст'; 
											} else if (inputAge.value < 35 || isNaN(inputAge.value)) {
													inputAge.style.border = '2px solid rgba(176, 0, 2, 0.4)';
													inputAge.style.transition = '1s';
													errorMessage.style.display = 'block';
													errorMessage.classList.add('animated','fadeIn');
													errorMessage.innerHTML = 'Возраст кандидата должен быть от 35 лет'; 
													} else if (inputAge.value.length != 2 || inputAge.value > 90) {
														inputAge.style.border = '2px solid rgba(176, 0, 2, 0.4)';
														inputAge.style.transition = '1s';
														errorMessage.style.display = 'block';
														errorMessage.classList.add('animated','fadeIn');
														errorMessage.innerHTML = 'Таких старых в президенты не берут!'; 
													} else {
														inputAge.style.border = '';
														errorMessage.style.display = 'none';
													};
		};

		//---------------------------------------------------

		function checkBio() {
			if (inputBio.value == '') {
					inputBio.style.border = '2px solid rgba(176, 0, 2, 0.4)';
					inputBio.style.transition = '1s';
					errorMessage.style.display = 'block';
					errorMessage.classList.add('animated','fadeIn');
					errorMessage.innerHTML = 'Заполните поле "Биография'; 
					} else if (!isNaN(inputBio.value) || inputBio.value.length < 10) {
							inputBio.style.border = '2px solid rgba(176, 0, 2, 0.4)';
							inputBio.style.transition = '1s';
							errorMessage.style.display = 'block';
							errorMessage.classList.add('animated','fadeIn');
							errorMessage.innerHTML = 'Введите не менее 10 символов в поле "Биография"'; 
							} else {
									inputBio.style.border = '';
									errorMessage.style.display = 'none';
									};
		};





		function checkErrors() {
				let a = inputName.value.replace(/^\s+/i, '');
				inputName.value = a;
				//console.log(inputName.value.length);
					if (inputName.value == '') {
					inputName.style.border = '2px solid rgba(176, 0, 2, 0.4)';
					inputName.style.transition = '1s';
					errorMessage.style.display = 'block';
					errorMessage.classList.add('animated','fadeIn');
					errorMessage.innerHTML = 'Заполните поле "Фамилия Имя Отчество"'; 
				} else if (!isNaN(inputName.value) || inputName.value.length < 2 || pattern.test(inputName.value )) {
						inputName.style.border = '2px solid rgba(176, 0, 2, 0.4)';
						inputName.style.transition = '1s';
						errorMessage.style.display = 'block';
						errorMessage.classList.add('animated','fadeIn');
						errorMessage.innerHTML = 'Введите не менее двух букв кириллицей в поле "Фамилия Имя Отчество"'; 
						} else if (inputAge.value == '') {
								inputName.style.border = '';
								inputAge.style.border = '2px solid rgba(176, 0, 2, 0.4)';
								inputAge.style.transition = '1s';
								errorMessage.style.display = 'block';
								errorMessage.classList.add('animated','fadeIn');
								errorMessage.innerHTML = 'Заполните поле "Возраст'; 
								} else if (inputAge.value < 35 || isNaN(inputAge.value)) {
										inputName.style.border = '';
										inputAge.style.border = '2px solid rgba(176, 0, 2, 0.4)';
										inputAge.style.transition = '1s';
										errorMessage.style.display = 'block';
										errorMessage.classList.add('animated','fadeIn');
										errorMessage.innerHTML = 'Возраст кандидата должен быть от 35 лет'; 
										} else if (inputAge.value.length != 2 || inputAge.value > 90) {
											inputName.style.border = '';
											inputAge.style.border = '2px solid rgba(176, 0, 2, 0.4)';
											inputAge.style.transition = '1s';
											errorMessage.style.display = 'block';
											errorMessage.classList.add('animated','fadeIn');
											errorMessage.innerHTML = 'Таких старых в президенты не берут!'; 
										} else if (inputBio.value == '') {
											inputName.style.border = '';
											inputAge.style.border = '';
											inputBio.style.border = '2px solid rgba(176, 0, 2, 0.4)';
											inputBio.style.transition = '1s';
											errorMessage.style.display = 'block';
											errorMessage.classList.add('animated','fadeIn');
											errorMessage.innerHTML = 'Заполните поле "Биография'; 
										} else if (!isNaN(inputBio.value) || inputBio.value.length < 10) {
											inputName.style.border = '';
											inputAge.style.border = '';
											inputBio.style.border = '2px solid rgba(176, 0, 2, 0.4)';
											inputBio.style.transition = '1s';
											errorMessage.style.display = 'block';
											errorMessage.classList.add('animated','fadeIn');
											errorMessage.innerHTML = 'Введите не менее 10 символов в поле "Биография"'; 
											} else {
												inputName.style.border = '';
												inputAge.style.border = '';
												inputBio.style.border = '';
												errorMessage.style.display = 'none';
												};

	};



		
		readyBtn.addEventListener('click', function() {
			
			if (!pattern.test(inputName.value) && inputBio.value.length >= 10 && inputName.value.length >= 2 && isNaN(inputBio.value) && isNaN(inputName.value) && inputName.value != '' && inputAge.value.length == 2 && inputAge.value != '' && inputBio.value != '' && inputAge.value >= 35 && inputAge.value <= 90) {

			newMainCardsItem = mainCardsItem[1].cloneNode(true);
			mainCards.appendChild(newMainCardsItem);
			let candidatePhoto = document.querySelectorAll('.photo')[2];
			let candidateName = document.querySelectorAll('.name')[2];
			let candidateAge = document.querySelectorAll('.age')[2];
			//let candidateSex = document.querySelectorAll('.sex')[2];
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
						let age = inputAge.value.split('');
												if(age[1] == 1) {
													candidateAge.innerHTML = `${inputAge.value} год`;
												} else if (age[1] > 1 && age[1] < 5) {
													candidateAge.innerHTML = `${inputAge.value} года`;
												} else if (age[1] >= 5 && age[1] <= 9) {
													candidateAge.innerHTML = `${inputAge.value} лет`;
												} else if (age[1] == 0) {
													candidateAge.innerHTML = `${inputAge.value} лет`;
												};

						candidateBio.innerHTML = inputBio.value;
					}

					// if (inputSex[0].checked) {
					// 	candidateSex.innerHTML = 'Мужской';
					// } else candidateSex.innerHTML = 'Женский';
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
					resultCount[i].classList.remove('numbers');
					};
				};

				candidatePhoto.classList.remove('photo-2');
				candidatePhoto.style.cssText =   `background-image: ${personHair.style.backgroundImage}, \
																					${personClothes.style.backgroundImage}, \
																					${personShoes.style.backgroundImage}, \
																					${personSkin.style.backgroundImage};
																				   `;
			   newChooseWinnerFor();
			 } else {
			 	checkErrors();
			 	
			 };
			   
		});

		//Сбросить результаты
		
		let resetBtn = document.querySelector('#reset');

		resetBtn.addEventListener('click', function() {
			newMainCardsItem.remove();
			newChooseWinnerFor();
			checkErrors();
		});
		resetBtn.addEventListener('click', toCustomize);

		let cleaner = document.querySelector('.cleaner-btn');


		cleaner.addEventListener('click', function() {
			let resetInput = document.getElementsByClassName('reset-input');
			for (let i = 0; i < resetInput.length; i++ ) {
				resetInput[i].value = '';
				inputName.style.border = '';
				inputAge.style.border = '';
				inputBio.style.border = '';
				errorMessage.style.display = 'none';

			};

		})

		//Провести честное голосование
		let newOverlay = document.querySelector('.new-overlay');
		let sorryBtn = document.querySelector('#new-popup-btn');
		let counter = 0;
		
		function chooseWinner(a, b, c) {
			let max = Math.max(a, b, c);
			if (max == a) {
				mainCardsItem[0].classList.add('main-cards-item-active');
			} else if (max == b) {
				mainCardsItem[1].classList.add('main-cards-item-active');
			} else newMainCardsItem.classList.add('main-cards-item-active');
		};

		let votingBtn = document.querySelector('#voting');

		votingBtn.addEventListener('click', function() {
			counter = 0;
			newChooseWinnerFor();
			let progressBar = document.querySelectorAll('.progress-bar');
			let resultCount = document.querySelectorAll('.result-count');


			function addClassForResult() {
				for(let i = 0; i < resultCount.length; i++) {
					resultCount[i].classList.add('fade');
				}
			};


			function randomVotes() {
				resultCount[0].style.color = '#f2f2f2';
				resultCount[1].style.color = '#f2f2f2';
				resultCount[2].style.color = '#f2f2f2';
				let a = parseFloat((Math.random() * 100).toFixed(2));
				let b = parseFloat(((100 - a) * Math.random()).toFixed(2));
				let c = (100 - (a + b)).toFixed(2);
				a = a.toFixed(2);
				b = b.toFixed(2);
				console.log(+a + +b + +c);
				addClassForResult();
				progressBar[0].style.height = `${a}%`;
				progressBar[1].style.height = `${b}%`;
				progressBar[2].style.height = `${c}%`;
				setTimeout(function(){
					resultCount[0].style.color = '';
					resultCount[1].style.color = '';
					resultCount[2].style.color = '';
					resultCount[0].innerHTML = `${a}%`;
					resultCount[1].innerHTML = `${b}%`;
					resultCount[2].innerHTML = `${c}%`;
				}, 3600);

				setTimeout(chooseWinner(a, b, c), 5000);
			};
			randomVotes();

		});

			//вмешаться в выборы
			
			sorryBtn.addEventListener('click', function() {
				newOverlay.classList.add('animated','fadeOut');
				setTimeout(function() {
					newOverlay.style.display = 'none';
				}, 1000);
			});

			let crimeBtn = document.querySelector('#crime');
			crimeBtn.addEventListener('click', function() {
				counter += 1;

				if (counter > 1) {
					newOverlay.style.display = 'block';
					newOverlay.classList.remove('fadeOut');
					newOverlay.classList.add('animated','fadeIn');

				} else {
					newChooseWinnerFor();
					let progressBar = document.querySelectorAll('.progress-bar');
					let resultCount = document.querySelectorAll('.result-count');
					resultCount[0].style.color = '#f2f2f2';
					resultCount[1].style.color = '#f2f2f2';
					resultCount[2].style.color = '#f2f2f2';

					let a = parseInt(progressBar[0].style.height);
					let b = parseInt(progressBar[1].style.height);
					let c = parseInt(progressBar[2].style.height);
					

					let multiplier;

					if (a == 0.00 && b == 0.00) {
						console.log('Круче только яйца!');
					} else {
							if (c >= 75) {
							a = 0.01;
							b = 0.01;
							c = 99.98;
							} else if(a == 0.00 && c < 75) {
								a = a.toFixed(2);
								b = (b - 25).toFixed(2);
								c = (c + 25).toFixed(2);
							} else if(b == 0.00 && c < 75) {
									a = (a - 25).toFixed(2);
									b = b.toFixed(2);
									c = (c + 25).toFixed(2);
								} else if (a == b && c < 75) {
										a = (a - 12.5).toFixed(2);
										b = (b - 12.5).toFixed(2);
										c = (c + 25).toFixed(2);
									} else if(c < 75) {
											let a1 = ((a * 100) / (a + b)).toFixed(2);
											let b1 = (100 - a1).toFixed(2);
											a1 = (a1 * 25 / 100).toFixed(2);
											a = (a - a1 + 0.39).toFixed(2);
											b1 = (25 - a1).toFixed(2);
											b = (b - b1 + 0.43).toFixed(2);
											c = (100 - a - b).toFixed(2);
											console.log(+a + +b + +c);
										}; 

						progressBar[0].style.height = `${a}%`;
						progressBar[1].style.height = `${b}%`;
						progressBar[2].style.height = `${c}%`;

						setTimeout(function(){
							resultCount[0].style.color = '';
							resultCount[1].style.color = '';
							resultCount[2].style.color = '';
							resultCount[0].innerHTML = `${a}%`;
							resultCount[1].innerHTML = `${b}%`;
							resultCount[2].innerHTML = `${c}%`;
						}, 3600);
							
						setTimeout(chooseWinner(a, b, c), 5000);

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
				}

		});



	})
