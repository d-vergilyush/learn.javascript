	window.addEventListener('DOMContentLoaded', function () {

			//Modal
			let overlay = document.querySelector('.overlay');
			let create = document.querySelector('#popup-btn');
			let main = document.querySelector('.main');
			let custom = document.querySelector('.custom');
			let customTools = document.getElementsByClassName('custom-tools');

			create.addEventListener('click', function() {

				overlay.classList.add('animated', 'fadeOut');
				setTimeout(function() {
					overlay.style.display = 'none';
				}, 1500);
				main.classList.add('animated','fadeOut');
				main.style.display = 'none';
				custom.style.display = 'flex';
				for (let i = 0; i < customTools.length; i++ ) {
				showCustomTools.call(customTools[i])
				};

			});

		function showCustomTools() {
			this.classList.add('animated','slideInDown');
			this.style.display = 'block';
		};

	})
