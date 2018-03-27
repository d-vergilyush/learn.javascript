var budget = prompt ("Ваш бюджет? (в рублях)");
var shopName = prompt ("Название вашего магазина?");
mainList = {
		budget,
		shopName,
		shopGoods: [],
		employers: {},
		open: true

};

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");


console.log(mainList);
console.log(mainList.shopGoods);
function out () {
	var p;
	p = document.getElementById('out');
	p.innerHTML = "Ваш бюджет на 1 день: " + Math.round(budget / 30 * 10) / 10  + " рублей (округлённо)";
}

