let money,
	name,
	time,
	price = 1000;

function start () {
		money = prompt ("Ваш бюджет? (в рублях)", "");

		while (isNaN(money) || money == "" || money == null) {
				money = prompt ("Ваш бюджет? (в рублях)", "");

		}
		name = prompt ("Название вашего магазина?", "").toUpperCase();
		time = 15
}

start();

let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employees: {},
		open: false,
		discount: false,
		shopItems: [],
		chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");
				
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
					// console.log('Всё верно!');
					mainList.shopGoods[i] = a;
				} else i--;
			} 
		},
		workTime: function workTime(time) {
			if (time < 0) {
				console.log ('Такого не может быть');
			} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
				} else if (time < 24) {
					console.log('Уже слишком поздно!')
					} else {
							console.log('В сутках только 24 часа!');
						}
		},
		out: function out(money) {
			let p;
			p = document.getElementById('out');
			p.innerHTML = "Ваш бюджет на 1 день: " + Math.round(mainList.budget / 30 * 10) / 10  + " рублей (округлённо)";
		},
		makeDiscount: function makeDiscount(price) {
			if (mainList.discount == true) {
				price *= 0.8;
			} 
		},
		hireEmployees: function hireEmployees() {
			for (let i = 1; i < 5; i++) {
				let name = prompt("Укажите имя сотрудника");
					if ((typeof(name)) == 'string' && (typeof(name)) != null && name != '' && name.length < 50 && isNaN(name)) {
						// console.log('Имя указано верно');
						mainList.employees[i] =  name;
					} else {
						i--;
					}
			}
		},

		chooseShopItems: function chooseShopItems() {
				let items = prompt("Перечислите через запятую товары", "");
				while(!isNaN(items) || items == "" || items == null) {
					items = prompt("Перечислите через запятую товары", "");
				}
			mainList.shopItems = items.split(",");
			mainList.shopItems.push(prompt("Подождите, еще ", ""));
			mainList.shopItems.sort();
		}

}

console.log(mainList.chooseGoods());
console.log(mainList.workTime(time));
console.log(mainList.out(money));
console.log(mainList.makeDiscount(price));
console.log(mainList.hireEmployees());
console.log(mainList.chooseShopItems());

console.log("У нас вы можете купить: ")
mainList.shopItems.forEach( function(item, index) {
	console.log(index + 1 + ". " + item)
});


console.log("\nНаш магазин включает в себя: ");
for (let key in mainList) {
	if (key != 'employees' && (typeof(mainList[key])) !== "function") {
		console.log(key + ": " + mainList[key]);
	} else {
		console.log(key)
	}
	
}






// week
//
// let week = [];
// let str = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
// for (let i = 0; i < 1; i++) {
// 				let a = prompt('Какой сегодня день недели?', '');
// 				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && isNaN(a)) {
// 					day = a;
			
// 				} else {
// 					alert("Введи день недели");
// 					i--;
// 				}
// };

// day = day.toLowerCase();
// week = str.split(", ");
// b = week.indexOf( day );
// // alert(b);
// if (b != -1) {
// 	for (i = 0; i < week.length; i++) {
// 	if (i != b && i < 5) {
// 		console.log('%c%s', 'font-size: 17px;', week[i]);
// 	} else if (i == b && i > 4) {
// 		console.log('%c%s', 'font-style: Italic; font-weight: bold; font-size: 17px;', week[b]);
// 	} else if (i == b && i < 5){
// 		console.log('%c%s', 'font-style: Italic; font-size: 17px;', week[b]);
// 	} else {
// 		console.log('%c%s', 'font-weight: bold; font-size: 17px;', week[i]);
// 	}
// 	};
// } else alert("Такого дня недели не бывает!")

	

// alert("Привет! Я - Великий рандом! Готов выбрать победителя? ");
// var min = 1;
// for (var i = 0; i < 1; i++) {
// 	var a = prompt("Тогда введи количество участников конкурса");
// 	a = +a;
// 	if (isFinite(a) && a != '0') {
// 		max = a;
// 		getRandomInt(min, max);
// 		alert("Победитель: \№" + win + "! Ура!");

// 	} else {
// 		alert("Ой, что-то пошло не так! Введи число");
// 		i--;
// 	}
// };

// function getRandomInt(min, max) {
//   return win = Math.floor(Math.random() * (max - min)) + min;
// };



// function sortNumbers(a,b) {
// 	return a - b;

// }
// let arr = [1, 15, 20, 3]
// let i = arr.sort(sortNumbers)
// alert(i);