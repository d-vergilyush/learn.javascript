function timer() {

	let deadline = '2018-04-18';

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

}

module.exports = timer;