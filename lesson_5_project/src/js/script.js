//Получить кнопку "Открыть магазин" через id
let shopName = document.getElementById('open-btn');
console.log(shopName);

// Получить все поля в левом меню через классы
let leftArr = ['name-value','budget-value','goods-value','items-value','employers-value','discount-value','isopen-value'];
// console.log(leftArr);
let leftItems = [];
leftArr.forEach( function(element, index) {
	leftItems[index] = document.getElementsByClassName(element)[0];
});
console.log(leftItems);

//Получить поля категории товаров через класс
let goodsItem = document.getElementsByClassName('goods-item');
console.log(goodsItem);

//  Получить все 3 кнопки через Tag
let mainFunctions = document.getElementsByClassName('main-functions')[0];
let buttons = mainFunctions.getElementsByTagName('button');
console.log(buttons);

// Получить поля ввода товаров, времени и расчета бюджета через querySelector
let rightArr = ['#goods_1','#goods_2','#goods_3','#goods_4','.choose-item','.time-value','.count-budget-value'];
console.log(rightArr);
let rightItems = [];
rightArr.forEach( function(element, index) {
	rightItems[index] = document.querySelector(element);
});
console.log(rightItems);

// Получить поля имен сотрудников через querySelectorAll
let employersItem = document.querySelectorAll('.hire-employers-item');
console.log(employersItem);