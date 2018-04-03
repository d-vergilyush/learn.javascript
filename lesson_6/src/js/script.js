let open = document.getElementById('open-btn');
let leftArr = ['name-value','budget-value','goods-value','items-value','employees-value','discount-value','isopen-value'];
let leftItems = [];
leftArr.forEach( function(element, index) {
	leftItems[index] = document.getElementsByClassName(element)[0];
});
let goods_item = document.getElementsByClassName('goods-item');
let goods_btn = document.getElementsByTagName('button')[1];
let budget_btn = document.getElementsByTagName('button')[2];
let employees_btn = document.getElementsByTagName('button')[3];
let rightArr = ['.choose-item','.time-value','.count-budget-value'];
let rightItems = [];
rightArr.forEach( function(element, index) {
	rightItems[index] = document.querySelector(element);
});
let employees_item = document.querySelectorAll('.hire-employees-item');
let money,
	price;

open.addEventListener( 'click', () => {
	money = prompt ("Ваш бюджет? (в рублях)", "");

		while (isNaN(money) || money == "" || money == null) {
				money = prompt ("Ваш бюджет? (в рублях)", "");
		}
		leftItems[1].textContent = money;

		leftItems[0].textContent = prompt ("Название вашего магазина?", "").toUpperCase()
});

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
	let a = goods_item[i].value
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
				leftItems[2].textContent = mainList.shopGoods;
			} else i--;
		} 
});

rightItems[0].addEventListener('change', () => {
	let items = rightItems[0].value;
	if (isNaN(items) && items != "") {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();
		leftItems[3].textContent = mainList.shopItems;
	}
})

rightItems[1].addEventListener('change', () => {
	let time = rightItems[1].value;
		if (time < 0) {
		console.log ('Такого не может быть');
		mainList.open = false;
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.open = true ;
			} else if (time < 24) {
					console.log('Уже слишком поздно!')
					mainList.open = false;
					} else {
							console.log('В сутках только 24 часа!');
							mainList.open = false;
					};
	if(mainList.open == true) {
		leftItems[6].style.backgroundColor = 'green'
	} else leftItems[6].style.backgroundColor = 'red'
});

budget_btn.addEventListener("click", () => {
	rightItems[2].value = Math.round(money / 30 * 10) / 10;
});
employees_btn.addEventListener('click', () => {
	for (let i = 0; i < employees_item.length; i++) {
		let name = employees_item[i].value;
		mainList.employees[i] =  name;
		leftItems[4].textContent += mainList.employees[i] + ', ';
		
		}
});
let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employees: {},
		open: false,
		discount: false,
		shopItems: [],
		makeDiscount: function makeDiscount(price) {
			if (mainList.discount == true) {
				price *= 0.8;
			} 
		}
}





