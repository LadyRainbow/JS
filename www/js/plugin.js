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
