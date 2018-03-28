var money = prompt ("Ваш бюджет? (в рублях)");
var name = prompt ("Название вашего магазина?");
mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false	

};
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");


console.log(mainList);
console.log(mainList.shopGoods);
function out () {
	var p;
	p = document.getElementById('out');
	p.innerHTML = "Ваш бюджет на 1 день: " + Math.round(mainList.budget / 30 * 10) / 10  + " рублей (округлённо)";
}