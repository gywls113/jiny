//js_09_array2.js

var coffee = ['esspresso', 'americano', 'capuchino', 'caffe latte', 'cafe mocha', 'vanila choco latte'];

console.log(coffee);
var cLen = coffee.length;
console.log(cLen);

//pop(), push(), shift(), unshift(); concat();
console.log(coffee[2]);

var i = coffee.indexOf('cafe mocha'); // 없을  경우 : -1, 있을경우 해당 위치값
console.log(i);

// =========================================

var str = '안산, 수원, 강릉, 부산, 제주,서울, 태안, 순천, 여수, 거제, 인천';
console.log(str.indexOf('제'));//띄어쓰기도 글자 하나로 본다.
console.log(str.length);

//split는 배열을 만들지만 ()의 내용을 통해 원하는 형태대로 쪼갤 수 있다.
var strToArray = str.split(', ');
console.log(strToArray);

var tel = '031-999-9999';
console.log(tel.split('-'));


// =========================================
// join은 한 문장으로 만들어라 ()값은 사이를 구분하는 방법
var coffeeToPar = coffee.join(', ');
console.log(coffeeToPar);

//sort는 철자를 abcd순서로 변경한다.
var coffeeSort = coffee.sort();
console.log(coffeeSort);
//순서를 뒤집어서 반대로 설정하는 방법
//1. 틀린방법은 아니지만 사용X
var coffeeSortReverse = coffeeSort.reverse();
console.log(coffeeSortReverse);
//2. 함수를 이용한 방법
var coffeeDec = coffee.sort(function(a,  b){return b-a});
console.log(coffeeDec);

var arr = [1,5,10,3,2,7,6,8,9];
console.log(arr.sort(function(a,b){return b-a}));

// =========================================

coffee.push('ice tea');
coffee.pop();
coffee.shift();

//splice(시작 숫자, 갯수); - 원하는 배열의 순서를 삭제
//splice(0)이라고 쓰면 모두 다 지워진다.
var sp = coffee.splice(0, 3);
console.log(coffee);

// =========================================

var a = 'hi';
var b = a;
a = 'bye'
console.log(a,b);

var c = ['toDay'];
var d = c;
c[0] = 'nextDay'
console.log(c[0],d[0]);
var e = c.slice();
c[0] = 'prevday';
console.log(c,e);