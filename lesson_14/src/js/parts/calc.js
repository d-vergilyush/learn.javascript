function calc() {

	let persons = document.getElementsByClassName('counter-block-input')[0];
	let restDays = document.getElementsByClassName('counter-block-input')[1];
	let place = document.getElementById('select');
	let totalValue = document.getElementById('total');
	let personsSum = 0;
	let daysSum = 0;
	total = 0;

	totalValue.innerHTML = 0;
	function func() {

	}
	persons.addEventListener('change', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (restDays.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
			totalValue.style.color = '#c78030';
			totalValue.style.textShadow = 'none'
		} else {
			totalValue.innerHTML = total;
			totalValue.style.color = '#fff';
			totalValue.style.textShadow = '4px  4px 16px rgba(256, 256, 256, 0.6)';
			totalValue.classList.add('B');

		}
		
		
	});

	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (persons.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
			totalValue.style.color = '#c78030';
			totalValue.style.textShadow = 'none'
		} else {
			totalValue.innerHTML = total;
			totalValue.style.color = '#fff';
			totalValue.style.textShadow = '4px  4px 16px rgba(256, 256, 256, 0.6)';
			totalValue.classList.add('B');

		}
		
	});

	place.addEventListener('change', function() {
		if (persons.value == '' || restDays.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
			totalValue.style.color = '#c78030';
			totalValue.style.textShadow = 'none'

		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			totalValue.style.color = '#fff';
			totalValue.style.textShadow = '4px  4px 16px rgba(256, 256, 256, 0.6)';
			totalValue.classList.add('B');

		}
	});
}

module.exports = calc;