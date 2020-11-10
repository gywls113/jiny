// loop_02.js

/* 조건의 시작 값, 조건비교, 연산 */

/*
var n= 0;
while(n < 5 ){
  console.log(n);
  n+=1;
}
=↓↓↓↓↓↓======================*/
/*
<for문 양식>
for( ; ; ){

}
<for문 실제 쓰일때>
for( 변수; 조건 ; 연산){

}



*/
/*
for(var n =0; n<5; n+=1){
 console.log(n);
}

*/
/*
var y = 0;
for( ; y < 10; ){
  console.log(y);
  y+= 1;
}
=====================================*/
///for (var y=0; y<10; y+1){}


/*
for( let k =0; k < 5; k++){
  console.log(k);
}
console.log('k:' , k );
*/

// var문 대신 let문을 쓴다면 for괄호까지의 영역을 변수로써 활용할 수 있다.

//또한 for문이 끝난이후로도 let문을 사용하기를 원한다면,
//let, const는 함께쓰면 안된다.
//var변수때처럼 let k=0을 for문의 밖으로 빼놓고 사용하면된다.

/*
let k =0
for( ; k < 5; k++){
  console.log(k);
}console.log('k:' , k );


===
그래서 가급적 아래와 같이 var의 변수를 for문 밖으로 놓고 사용하는 방식을 추천함

var k =0
for( ; k < 5; k += 1){
  console.log(k);
}console.log('k:' , k );

============================================*/
// 문제 1. 각각의 p에 className 설정하기


/* var arr = ['포도', '사과', '바나나', '딸기'];
var classN = ['grape', 'apple', 'banana', 'straw'];
var testEl = document.getElementsByClassName('test')[0];
var pEl; 

var i =0;
for (; i<4; i += 1) {
  pEl= document.createElement('p');
  pEl.innerText = arr[i]+'를 먹는다'; */
// 문제 1. 각각의 p에 className 설정하기
  // <className 지정을위한 사용가능한 문법>
  // 1. Attribute : 속성을 변경이 가능하다(어떠한 속성명이든 관계없다.)
  // pEl.setAttibute('title', classN[i]);
  //
  // Attribute= 속성 / 하나의 속성밖에 추가할수있다
  // <id=#> 와 같은개념으로 1회성으로만 사용가능
  //========================================
  // 2. pEl.className : 속성 중 오직 class속성만 이름변경이 가능하다.
  // peL.className = classN[i];

  // className을 2개이상 지정할 때는 좋지않다
  //========================================
  // 3. pEl.classList / 는 className 계속 추가가능/덮어쓰기 가능/
  //pEl.classList.add('testClass');
  // pEl.classList.add(classN[i]);
  // pEl.classList.remove(classN[i]); /className 삭제
  // pEl.classList.toggle(classN[i]); / className 스위치

  //testEl.append(pEl);
    // console.log(arr[i]);
//}


//=====================================================
// for(최초의값;조건;연산수행){}

//var coffee = ['esspress','ameficano','latte','flat white','cafe moka','long blak']
//
//for(var j=0; j<coffee.length; j+=1){
//    console.log('1:',coffee[j]);
//}

//for (var i in coffee){
//    console.log(coffee[i]);
//}
// for ~in 문법은객체를 위한형식, 배열을 위해 만든 형식이 아니다.

// 배열형식을 사용할 때는 for, forEach를 사용
//coffee.forEach(function(data, index){
//    console.log(data, index);
//});

// for ~in 을 위해서는 객체를 위해 사용

var obj = { 
    'spring' :'black tea',
    'summer':'ice americano',
    'fall':'hot choco',
    'winter':'pepsi',
};
//var o = 0;
//for(; o < 4; o += 1){
//    console.log( obj.spring );
//}

for(var o in obj){
//    console.log( o );
    console.log( obj[o] );
}

//반복문
// for, forEach, for-in

var i = 0;
for(; i<100; i+=1){
    
    if(i < 10){
    console.log('0' + i)
}else if(i === 50){
    b break;
}else{
    console.log(i);
}
    
    }






