let money = prompt ("Ваш бюджет? (в рублях)");
let name = prompt ("Название вашего магазина?");
let time = 19;
mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false	

};

for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else i--;
			continue;
} 

// do... while
// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
// 				console.log('Всё верно!');
// 				mainList.shopGoods[i] = a;
// 				i++;
// 			};
// } while (i < 5);

// while
// let i = 0;
// while (i < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
// 				console.log('Всё верно!');
// 				mainList.shopGoods[i] = a;
// 				i++;
// 			};
// }

console.log(mainList);

if (time < 0) {
	console.log ('Такого не может быть');
} else if (time > 8 && time < 20) {
		console.log('Время работать!')
	} else if (time < 24) {
		console.log('Уже слишком поздно!')
		} else {
				console.log('В сутках только 24 часа!');
			};


function out () {
	let p;
	p = document.getElementById('out');
	p.innerHTML = "Ваш бюджет на 1 день: " + Math.round(mainList.budget / 30 * 10) / 10  + " рублей (округлённо)";
}

