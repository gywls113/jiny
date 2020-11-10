// js_06_function.js

var i = 0;
console.log(i);

// 함수는 어떠한 기능을 묶어서 수행하도록 처리하게 만든 형태
// 함수를 호출하여 사용할 때는 '함수의이름()'을 사용한다.

var fn = function(){
    return 10;
};

var fnResult = fn();
console.log(fnResult);


var fn2 = function(){
    console.log(20);
}; 
fn2();

var fnR = 10;
console.log(fnR);
var fn = function(){return 20;};

var fnR = fn();
console.log(fnR);

var fn2 = function(a){return a*a;}
fnR = fn2(5);
console.log(fnR);


// var old = 35;
var ret; // -> 함수 바깥에 존재하는 전역변수(전체를 역전할 수 있는 변수)
// 전역변수는 함수 안에서도 존재할 수 있으나 함수 안에 있을 때는 없는 것으로 침 (식으로써만 인지)
var myOld = function(old){
  if (old<20){
    ret = '아직 미성년입니다.';
  } else if (old <30){
    ret = '아직 순수 하시군요';
  } else if ( old < 60 ) {
    ret = '가장 열심히 일하고있는 시기이군요';
  } else {
    ret = '이제 즐기면서~~';
  }
  return ret;
};
myOld(26);
console.log(ret);

// 함수로 function을 감싼다 return으로써 값을 알려준다
// old는 {}안에있는 식들을 수행하기 위한 매개변수이다 무언가를 담게되는 수, 인수( 안에 담는 수)
// (old){if(old<20){}}와 같이 매개변수 괄호안에 있는 (old)는 인자라고 함

// 함수 : 함수 선언식, 함수 표현식

function DecFn(){return 1;}
// 호이스팅 현상 발행하여 시작점에 있는 것 처럼 인지
var EpxFn = function(){return 2;}
// 변수명이 호이스팅 현상 발생

console.log ( DecFn() );
console.log ( EpxFn );

//매개변수, 인수, 인자, 전역변수, 지역변수, 익명함수, 기명함수, 
//함수 선언식 (declarations), 함수 표현식(Expression), hoisting, 생성자함수

//함수는 최초의 형태 하나만 존재하므로 이를 복제하여 사용한다는 개념으로 인지 
// -> 생성자 함수

var myNewFn = function(nick){
    this.name = name;
    this.family = 'kang';
    this.fullName = this.name + ' ' + this.family;
    //return nick;
};

var a = new myNewFn('Jiny');
console.log(a.fullName);

// this는 js에서 2가지 개념을 가진다.
// 1(window), 2(생성자 처리시 매개변수 혹은 선택자체)

// ===============================================================

// 선언식 (함수자체에 이름을 부여하는 방법)
// 표현식 (함수를 변수에 대입하는 방법)
// 생성자 함수 (함수기능을 복제하여 재처리하는 함수)
// 즉시 실행함수 (함수짐나 재활용이 불가능한 일회용함수)

var ffn = function(){
    var i = 10;
    var j = 7;
    return i + j;
};
//console.log( ffn() )

//즉시실행함수(IIFE)
(function(k){
    var i = k;
    var j = 7;
    console.log(i*j);
    return i * j;
})(10);
