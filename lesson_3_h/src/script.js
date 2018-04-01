let str = "урок-3-был слишком легким";
let a = str[0].toUpperCase();
let b = str.slice(1);

str = a + b;
alert(str);
a = str.slice(0, 4);
alert(a);
alert( String.fromCharCode(45) );

// var target = "-";
// var pos = 0;
// while (true) {
//   var foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( foundPos ); // нашли на этой позиции
//   pos = foundPos + 1; // продолжить поиск со следующей
// }
