let string = "some test string";
console.log(string[0], string[string.length-1]);
console.log(string[0].toUpperCase(), string[string.length-1].toUpperCase());

console.log(string.indexOf('string'));
console.log(string.lastIndexOf(' '));
console.log(string.substr(5, 4));
console.log(string.substring(5, 9));
console.log(string.substring(0, [string.length-6]));
var a = '20';
var b = '16';
var str = a + b;
console.log(str);

var baks = '100%';
console.log(parseInt(baks));

console.log(Math.PI.toFixed(2));
console.log(Math.min(15, 11, 12, 16, 51, 12, 13, 51), Math.max(15, 11, 12, 16, 51, 12, 13, 51));

console.log(Math.random().toFixed(2));

var x = 180;
console.log(Math.floor (Math.random() * x));

var result = 0.6 + 0.7;
console.log (result.toFixed(1));

var obj = {	product: 'iphone',};
console.log (obj);
obj.price = 1000;
console.log (obj);
obj.details = {	model: '', color: '',};
console.log (obj);
console.log (obj.details);

var z = 6;
console.log (Math.pow(z, 2));





// ДЗ Урок №2 JavaScript

// // Условные операторы
// 1
if (x === 'hidden') {
	x = 'visible';
}
else {
	x = 'hidden';
}

// 2
if (x === 0) {
	x = 1;
}
else if (x < 0) {
	x = 'less than zero';
}
else if (x > 0) {
	x* = 10;
}


// тернарный оператор
// 1
x === 'hidden' ? 'visible' : 'hidden';
// 2
x === 0 ? x = 1 : (x < 0 ? x = 'less than zero' : (x > 0 ? x*= 10 : false));

// Конструкция switch... case
function testSwitch (a) {
	switch (a) {
		case "block":
			console.log ("block")
		break;
		case "none":
			console.log ("none")
		break;
		case "inline":
			console.log ("inline")
		break;
		default:
			console.log ("other")
		break;
	}
}
testSwitch ('block');


// Циклы
// 1.
function upperChar (inputStr) {
var x = inputStr.split (' ');
  for (var z = 0; z<x.length; z++) {
  x[z] = x[z][0].toUpperCase() + x[z].substr(1);
  }
    return x.join(' ');
};
upperChar ('I am in the easycode');

// 2.
function best(x) {
	result = x.charAt(-1);
	for (var i = x.length-1; i >=0; i--) {
	result = result+x.charAt(i);
	}
	return(result);
	}
best('tseb eht ma i');

// 3.
function fact(a) {
var result = 1;
for (var i = 1; i <= a; i++) {
  result = result * i;
}
return(result);
}
fact(10);

// 4.
function countTo(x) {
  var counter = [];
  for(var i=1;i<=x;i++) {
    counter.push(i);
  }
  return 'Считаем до '+x+'и: '+counter.join(', ');
}
countTo(10)

// 5.
function joinUpperChar (inputStr) {
var x = inputStr.split (' ');
  for (var z = 0; z<x.length; z++) {
  x[z] = x[z][0].toUpperCase() + x[z].substr(1);
  }
    return x.join('');
};
joinUpperChar ('JavaScript is a pretty good language');

// 6.
for (var i = 1; i<=15; i++) {
			console.log(i++);
}
