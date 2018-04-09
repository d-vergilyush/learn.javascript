//1. конструктор

// function User (name, surname) {
// this.value = document.getElementById('age').value;
// this.showUser = function() {
// 		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 	}
// }
// let ivan = new User('Иван', 'Петриченко');  
// ivan.showUser();

// 2. метод объекта

// let user = {
// 	value: document.getElementById('age').value,
// 	showUser: function(name, surname) {
// 		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 	}
// }
// user.showUser('Иван', 'Петриченко');

// 3. явное указание this 

let age = document.getElementById('age');
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.call(age, 'Никита', 'Трофимов');

