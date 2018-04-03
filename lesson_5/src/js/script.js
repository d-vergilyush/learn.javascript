let menu = document.querySelector('.menu')
let menuItem = document.getElementsByClassName('menu-item');
let body = document.getElementsByTagName('body');
let promptText = document.getElementById('prompt');
document.querySelector('.adv').remove();
document.getElementById('title').innerHTML="Мы продаем только подлинную технику Apple";


body[0].style.background = 'url(../img/apple_true.jpg) center no-repeat';

menu.insertBefore(menuItem[2], menuItem[1]);

let newItem = document.createElement('li');
menu.appendChild(newItem);
newItem.classList.add('menu-item');

// newItem.style.cssText = "color: #fff; \
//     height: 40px; \
//     line-height: 40px; \
//     padding-right: 15px; \
//     padding-left: 15px; \
//     border: 1px solid #fff; \
//     border-radius: 8px; \
//     cursor: pointer; \
//     box-shadow: 0px 0px 20px  rgba(256, 256, 256, .4); \
//   ";
newItem.innerHTML = 'Пятый пункт';

for (let i = 0; i < 1; i++) {
		let a = prompt("Как вы относитесь к технике Apple?", "");
				
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 150) {
					promptText.innerHTML = a;
				} else i--;
			} 

