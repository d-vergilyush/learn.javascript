window.addEventListener('DOMContentLoaded', function () {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', event => {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer

	let deadline = '2018-04-12';

	//функция для получения оставшего времени
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			hours = Math.floor( (t/(1000*60*60)) ),
			minutes = Math.floor( (t/1000/60) % 60),
			seconds = Math.floor( (t/1000) % 60 );
			if(hours < 10) hours = '0'+hours; 
			if(minutes < 10) minutes = '0'+minutes; 
			if(seconds < 10) seconds = '0'+seconds; 
			
	// функция возвращает объект с данными
			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	}
	// функция установки таймера (таймер получаем по id)
	let timeInterval; //объявили  фунцию, запускающую setInterval
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

	// функция обновления данных в таймере
			function updateClock() {
				let t = getTimeRemaining(endtime);
				if (t.total > 0) {
					hours.innerHTML = t.hours,
					minutes.innerHTML = t.minutes,
					seconds.innerHTML = t.seconds;
				} else {
					hours.innerHTML = '00';
					minutes.innerHTML = '00';
					seconds.innerHTML = '00';
				}
				

				if(t.total <= 0) {
					clearInterval(timeInterval);
				}
			}

			updateClock();
			timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);

	//Scroll

	let menu = document.getElementsByTagName('nav')[0];
	menu.addEventListener('click', function(event) {
		event.preventDefault();
		animate(function (timePassed) {
			let target = event.target;
			let section = document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0, section.getBoundingClientRect().top / 20 - 4);
		}, 1500);
	});

	function animate(draw, duration) {
		let start = performance.now();
		requestAnimationFrame(
			function animate(time) {
				let timePassed = time - start;
				if (timePassed > duration) {
					timePassed = duration;
				}
				draw(timePassed);

				if (timePassed < duration) {
					requestAnimationFrame(animate);
				}
			});
	}

	//Modal
	let more = document.querySelector('.more');
	let overlay = document.querySelector('.overlay');
	let close = document.querySelector('.popup-close');
	let descr_btns = document.querySelectorAll('.description-btn');
	let showModal = function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	};

	more.addEventListener('click', showModal);

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';

	});
	
	for (let i = 0; i < descr_btns.length; i++) {
		descr_btns[i].addEventListener('click', showModal);
	}

//Form

let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо! Скоро мы с вами свяжемся";
message.failure = "Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0];
let input = document.getElementsByClassName('clear_input');
let contact_form = document.getElementById('form');
let statusMessage = document.createElement('div');
statusMessage.classList.add('status');

form.addEventListener('submit', sendForm);
contact_form.addEventListener('submit', sendForm);

function sendForm(event) {
	event.preventDefault();
	this.appendChild(statusMessage);

	//AJAX
	let request = new XMLHttpRequest();
	request.open("POST", 'server.php')

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(form);

	request.send(formData);

	request.onreadystatechange = function() {
		if(request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
		} else if(request.readyState === 4) {
			if(request.status == 200 && request.status < 300) {
				statusMessage.innerHTML = message.success;
				//успешная отправка данных, добавляем контент
			} else statusMessage.innerHTML = message.failure;
		}
	}
	for(let i = 0; i < input.length; i++) {
		input[i].value = '';
	}
}

});
