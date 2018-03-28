let num = 33721;
let res = 1;
let m = [];

for (let i = 0; i < 5; i++) {
		res *= num % 10;
		console.log("res = " + res);
		m[i] = res;
		num = Math.floor(num / 10);
		console.log("num = " + num);
}

res = Math.pow(res, 3);

function out () {
	var p;
	p = document.getElementById('out');
	p.innerHTML = "Произведение цифр <br> числа 33721 в кубе = " + res;
}