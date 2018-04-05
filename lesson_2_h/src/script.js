console.log('%cЗадача 1.', 'font-size: 17px; color: crimson;');
let today = new Date();
let week = [];
let str = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
week = str.split(", ");
b = (today.getDay() - 1);
alert("Сегодня " + week[b]);


	for (i = 0; i < week.length; i++) {
	if (i != b && i < 5) {
		console.log('%c%s', 'font-size: 17px; color: #fff; background: linear-gradient(45deg, #1c8fd4 0%, #7e66e7 100%); padding: 0 5px;', week[i]);
	} else if (i == b && i > 4) {
		console.log('%c%s', 'font-style: Italic; font-weight: bold; font-size: 17px; color: #fff; background: linear-gradient(45deg, #1c8fd4 0%, #7e66e7 100%); padding: 0 5px', week[i]);
	} else if (i == b && i < 5){
		console.log('%c%s', 'font-style: Italic; font-size: 17px; color: #fff; background: linear-gradient(45deg, #1c8fd4 0%, #7e66e7 100%); padding: 0 5px', week[i]);
	} else {
		console.log('%c%s', 'font-weight: bold; font-size: 17px; color: #fff; background: linear-gradient(45deg, #1c8fd4 0%, #7e66e7 100%); padding: 0 5px', week[i]);
	}
	};



// Создать массив arr = []
// Записать в него 7 многозначных чисел в виде строк
// Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
let task_2 = setTimeout(func, 3000);

function func () {
	let arr = ['54365', '3488888615', '74361', '66458789', '6545111116', '35633395', '7699999999641'];

console.log('%cЗадача 2. %c Массив %c arr %c содержит числа: ' + arr, 'font-size: 17px; color: crimson;', '', 'font-size: 15px; color: crimson;', '');
console.log('Теперь выведем числа, начинающиеся с "7"  или "3"');

for (i = 0; i < arr.length; i++) {
	if (arr[i].indexOf('7') == 0 || arr[i].indexOf('3') == 0 ) {
		console.log(arr[i]);
	}
}
}

