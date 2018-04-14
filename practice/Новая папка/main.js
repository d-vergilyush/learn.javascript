document.addEventListener("DOMContentLoaded", () => {

	const btn = document.getElementById('modal');
	const overlay = document.querySelector('.overlay');
	const popup = document.querySelector('.popup');

	btn.addEventListener('click', () => {
		overlay.style.display = 'block';
		overlay.classList.add('fade-in');
		popup.classList.add('fade-in-up');
	});

});