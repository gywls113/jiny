// js_03_operator.js

console.log('start!!!!!!!!!!!');

// 연산자(operator) : + - * / %
// 피연산자(operand) : 1 + 1에서 연산자를 제외한 부분

var n = 10;

var sum;
sum = 10 + 20;
console.log(sum);

var min;
min = 10 - 5;
console.log(min);

var multi;
multi = n * 3;
console.log(multi);

var div;
div = n / 3;
//divR = parseInt(div);
//var divR = Math.round(div)
console.log(div);

var fac;
fac = n % 3; // 10 / 3처리시 몫을 제외한 나머지
console.log(fac);

console.log('n',n);

var a =2;
a = a + 2;
console.log(a);
a = a + 10;
console.log(a);
a = a - 3;
console.log(a);
a = a * 3;
console.log(a);
a += 5; // a = a+5 
console.log(a);
a -= 10;
console.log(a);
a /= 2;
console.log(a);
a *= 100;
console.log(a);

var b = 0;
//b += 1;
console.log(++b); //1
++b;
++b;
++b;
++b;
++b;
++b;
++b;
console.log(b);
//++,-- 두개밖에 안된다. * / % 는 해당사항 X
console.log(--b);
b++;
console.log(b);
console.log(+b);
console.log(++b);
console.log('검증', b);
console.log(b++);
console.log(b++);
    