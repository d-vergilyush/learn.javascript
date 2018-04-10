let menu = document.querySelector('.menu') //получили всё меню
let menuItem = document.getElementsByClassName('menu-item'); //получили псевдомассив со всеми элементами меню 
let body = document.getElementsByTagName('body'); //получили body
let promptText = document.getElementById('prompt'); //получили поле для вывода текста
document.querySelector('.adv').remove(); //получили блок с рекламой и удалили его
document.getElementById('title').innerHTML="Мы продаем только подлинную технику Apple"; 
//получили заголовок и вставили в него новый текст


body[0].style.background = 'url(../img/apple_true.jpg) center no-repeat'; //применили стили к body

menu.insertBefore(menuItem[2], menuItem[1]); // вставляем menuItem[2](третий пункт меню) перед menuItem[1](второй пункт меню)

let newItem = document.createElement('li'); // создали новый элемент li
menu.appendChild(newItem); //вставили этот элемент внутрь меню, по умолчаю он последний, как и надо
newItem.classList.add('menu-item'); //добавили класс menu-item

newItem.innerHTML = 'Пятый пункт'; //написали текст 'Пятый пункт' внутри newItem

for (let i = 0; i < 1; i++) {
		let a = prompt("Как вы относитесь к технике Apple?", "");
				
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 150) {
					promptText.innerHTML = a;
				} else i--;
			} 

