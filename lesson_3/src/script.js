let money,
		name,
		time,
		price

function start () {
		money = prompt ("Ваш бюджет? (в рублях)");

		while (isNaN(money) || money == "" || money == null) {
				money = prompt ("Ваш бюджет? (в рублях)");

		}
		name = prompt ("Название вашего магазина?").toUpperCase();
		time = 21
}

start();

let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employees: {},
		open: false,
		discount: false	

};

function chooseGoods() {
		for (let i = 0; i < 5; i++) {
				let a = prompt("Какой тип товаров будем продавать?");
				
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
					console.log('Всё верно!');
					mainList.shopGoods[i] = a;
				} else i--;
		} 
}

chooseGoods();

function workTime(time) {
		if (time < 0) {
			console.log ('Такого не может быть');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!')
			} else if (time < 24) {
				console.log('Уже слишком поздно!')
				} else {
						console.log('В сутках только 24 часа!');
					};

}

workTime(7);
console.log(mainList);

function out (money) {
	let p;
	p = document.getElementById('out');
	p.innerHTML = "Ваш бюджет на 1 день: " + Math.round(mainList.budget / 30 * 10) / 10  + " рублей (округлённо)";
}

function checkDiscount (price) {
		if (discount = "true") {
			price *= 0.8;
			console.log(price);
		} 
}

// checkDiscount(1000);

function hireEmployees () {
	let b = 1;
	for (let i = 0; i < 4; i++) {
		let a = prompt("Укажите имя сотрудника");
		
		
		
		if ((typeof(a)) == 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('Имя указано верно');
			mainList.employees[i] = b + " - " + a;
		} else {
			i--;
		};
		b++;
	}
}
hireEmployees();
console.log(mainList.employees);