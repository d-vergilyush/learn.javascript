window.addEventListener('DOMContentLoaded', function () {


button = document.getElementsByTagName('button'); //все кнопки
let color = ['#DC143C', '#FFE4E1',  '#0000FF', '#C71585', '#FFB6C1', '#20B2AA', '#FFFF00', '#7FFFD4', '#BC8F8F', '#00FF00', '#F4A460', '#FF4500'];

function colorEl() {

	function getrand(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let rand = getrand(0, button.length - 1);
	let randColor = getrand(0, color.length - 1);
	// console.log(rand);
	// console.log(randColor);
	button[rand].style.background = color[randColor];
};
let time = setInterval(colorEl, 10);



});


// let rand = Math.floor( (Math.random() * 10 ) + 1);
	// let randColor = Math.floor( (Math.random() * 10 ) + 1);
	// if (rand > button.length || randColor > color.length) {
	// 	i--;
	// } else {
		
	// 	button[rand - 1].style.background = color[randColor - 1];
	// }