function modal() {
	
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

};

module.exports = modal;