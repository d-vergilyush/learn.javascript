
let age = document.getElementById('age');
function User (name, surname) {
this.name = name;
this.surname = surname;
this.value = age.value;
this.showUser = function() {
		alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
	}
}
let ivan = new User('Иван', 'Петриченко');  
ivan.showUser();


// let age = document.getElementById('age');
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser.call(age, 'Никита', 'Трофимов');