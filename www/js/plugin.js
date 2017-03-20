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


// ДЗ УРОК № 3 JavaScript
// ЗАДАЧИ ПО ФУНКЦИЯМ
// 1.
function getDobutok () {
    if (arguments.length > 0){
    var arr = 1;
    var max = arguments.length;
    for (var i = 0 ; i < max ; i++) {
        arr *= arguments[i];
    }
    return arr;
    } else {
     return 0;
    }
 }
getDobutok (14, 45, 171);


// 2.
function factorial (limit) {
    var value;
    if (limit > 1) {
        value = limit*factorial(limit-1);
    } else {
        value = limit;
    }
    return value;
}

factorial (10);


// 3.
function reverseString (str) {
    var value = '';
   for (var i = str.length-1 ; i >= 0 ; i--) {
       value += str[i];
   }
    return value;
}

reverseString ('Marina');


// 4.
function getCodeStringFromText (str) {
	var newStr= '';
	for (var i = 0; i < str.length; i++){
		if (i != str.length-1) {
			newStr += str.charCodeAt(i) + ' ';
		} else {
			newStr += str.charCodeAt(i);
		}
	}
	return newStr;
}
getCodeStringFromText ('hello');


// 5.
function printChars (string, i=0) {

	console.log(string[i]);
	if (i < string.length) {
		i+=1;
        printChars(string, i);
	}

}
printChars ('string');


// 6-1.
function firstF (arr, func) {
	var newStr = 'New Value: ';
	for (var i = 0; i<arr.length; i++){
		newStr += func(arr[i]);
	}
	return newStr;
}

function secF (symbol) {
	return symbol.toUpperCase();
}
firstF (['my', 'name', 'is'], secF);

// 6-2.
function firstF (arr, func) {
	var newStr = 'New Value: ';
	for (var i = 0; i<arr.length; i++){
		if (i != arr.length-1) {
			newStr += func(arr[i])+', ';
		} else {
			newStr += func(arr[i]);
		}
	}
	return newStr;
	}

function secF (ind) {
	return ind*10;
}

firstF ([10, 20, 30], secF);

// 6-3.
function secF (ind) {
	return ind['name']+' is '+ ind['age'];
}

firstF ([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], secF);

// 6-4.
function secF (ind) {
	return ind.split("").reverse().join("");
}

firstF (['abc', '123'], secF);

// 6-5.
function secF (ind) {
	return ind+5+'`';
}

firstF ([1, 2, 3], secF);

// ЗАДАЧИ ПО МАССИВАМ
// 1.
function doubleArr (arr) {
    var arrLength = arr.length;
    for (var i = 0 ; i < arrLength ; i++) {
        arr.push(arr[i]);
    }

    return arr;
}
doubleArr (['tyure', 2, 'five', 25, 84, 12]);


// 2.
function getLastEl (arr) {

    var lastEl = arr[arr.length-1];
    return lastEl;
}
getLastEl ([56, 45, 18, 753, 146, 218]);


// 3.
function getArr (N) {
    var arr = [];
    for (var i = 1 ; i <= N ; i++) {
         arr.push(i);
    }

    return arr;
}
getArr (10);


// 4.
function getArr () {
    var arr = [];
    for (var i = 0 ; i < arguments.length ; i++) {
         arguments[i].splice(0, 1);
         arr.push(arguments[i]);

    }
    return arr;
}
getArr (['tyure', 2, 'five', 25], [15, 146], ['tyure', '2pop', 'five', 'Hahapop']);

// ЗАДАЧИ ПО МАССИВАМ-2
// 1.
function arrSort (prev, next) {
    if (prev < next) {
        return true;
    }
   else {
        return false;
    }
}
function sortStr (string) {
    var arr = string.split('');
    var newArr = arr.sort(arrSort);
    var newStr = newArr.join('');
    return newStr;
}

sortStr ('abdcqwerty');


// 2.
function arrSort (prev, next) {
    if (prev < next) {
        return true;
    }
   else {
        return false;
    }
}

function getSortArr () {
    var arr = arguments[0];
    var newArr = arr.sort(arrSort);
    return newArr;
}

 getSortArr ([2, 4, 7, 1, -2, 10, -9]);


// 3.
function getNewArr (arr, f, s) {
    var arrey = arr;
    var sec = s + 1;
    var newArr = arrey.slice(f, sec);
    return newArr;
}
getNewArr (['f', 'kk', 'jgjg', 'l', 'v', 'o', 'p'], 2, 4);


// 4.
function doubleArr (arr) {
    var newArr = arr.concat(arr);
    return newArr;
}
doubleArr (['tyure', 2, 'five', 25]);


// 5.
var cutIt = [1, 2, 3, 4, 5];
cutIt.splice(2, 2);
console.log(cutIt);


// 6.
 var cutPush = [1, 2, 3, 4, 5];
cutPush.splice(2, 2, 'three', 'four');
console.log(cutPush);


// 7.
function getNewArr () {
    var arr = arguments[0];
    arr.splice(2, 0, "learning");
    return arr;
}
 getNewArr (['I\'ve', 'been', 'JavaScript', 'since', 'last', 'autumn']);


// 8.
function arrLengthSort (prev, next) {
	 if (prev.length > next.length) {
			 return true;
	 }
	else {
			 return false;
	 }
}
function getSortArr (arr) {
	 var newArr = arr.sort(arrLengthSort);
	 return newArr;
}
getSortArr ([['ght', 'hjy', 'frty'], ['frty', 7], [2, 4, -2, 10, -9]]);


// 9.
var oldArr = ['tyure', 2, 'five', 25];

function copyArr (arr) {
    var newArr = arr.concat();
    return newArr;
}

copyArr (oldArr);

var newArr = copyArr (oldArr);
console.log(newArr + ' - new');


// 10.
function arrSortObj (prev, next) {
    if (prev.info.cores > next.info.cores) {
        return true;
    }
   if (prev.info.cores < next.info.cores) {
        return false;
    }
}
var arrObj = [{cpu: 'intel', info: {cores: 2, cache: 3}},
              {cpu: 'intel', info: {cores: 4, cashe: 4}},
              {cpu: 'intel', info: {cores: 1, cache: 1}},
              {cpu: 'intel', info: {cores: 3, cache: 2}},
              {cpu: 'intel', info: {cores: 4, cache: 2}}
              ];
 var newArrObj = arrObj.sort(arrSortObj);
 console.log(newArrObj);


// 11.
function sortPrice (list, min, max) {
    var changeList = [];
    for (var i = 0; i < list.length; i++) {
       if (list[i]['price'] >= min && list[i]['price'] <= max){
            changeList.push(list[i]);
        }
    }

        function sortPriceToLow (prev, next) {
    return prev.price - next.price;
}
    var sortChangeList = changeList.sort(sortPriceToLow);
   return sortChangeList;
}

var product = [{title: 'prod1', price: 5.2},
                {title: 'prod2', price: 0.18},
                {title: 'prod3', price: 15},
                {title: 'prod4', price: 25},
                {title: 'prod5', price: 18.9},
                {title: 'prod6', price: 8},
                {title: 'prod7', price: 19},
                {title: 'prod8', price: 63},
]

sortPrice (product, 15, 30);
