// js_04_condition.js

// 피자먹을까? -> 응
// 피자먹을까? -> 아니 -> 그럼 순대국먹자
// 피자먹을까? -> 아니 -> 그럼 순대국먹을까? -> 아니 -> 냉면먹자...

var myEat = 'pizza';
// 변수와 하나의 값을 같은지 비교여부로 참/거짓을 도출
// === 비교하여 같은 참을 확인, !== 비교하여 같은 값의 반대를 확인
var q = myEat !== '순대국';
console.log(q);

//if(조건){조건의 기능이 참이면 실행하는 내용}
//if(조건){조건의 기능이 참이면 실행하는 내용} else {조건의 기능이 거짓일 경우 실행}
myEat = '냉면';
var myEatResult;

if(myEat === 'pizza'){
    //참이면 수행
    myEatResult = myEat + ' 먹으러가자!!!';
} else if( myEat =='순대국') {
    myEatResult = myEat + ' 에 밥말아 먹을까?';
} else {
    myEatResult = '너가 먹고싶은' + myEat + '먹으러 가자'; 
}

console.log(myEatResult);

/* var result = confirm('당신은 성인입니까?');
console.log (result);
if(result === true) {
    location = "http://naver.com";
} else {
    location = "https://www.cass.co.kr/";
} */

//var myOld = prompt('당신의 태어난 연도를 입력하세요.');
//console.log(myOld);

//var nowYear = new Date().getFullYear(); //올해 파악하는 기능
//console.log(nowYear - myOld + 1);

/* var myNai = nowYear - myOld + 1;
if(myNai <= 20){
    console.log('당신은 아직 미성년자입니다.');
}else if(myNai >= 40){
    console.log('당신은 제법 중후한 분이겠군요?');
} else {
    console.log('2~30대의 청년이시군요!');
} */

// ==================================================
/* switch(값){
case 값1: 참이면 수행 break;
case 값2: 참이면 수행 break;
case 값3: 참이면 수행 break;
case 값4: 참이면 수행 break;
case 값5: 참이면 수행 break;
case 값6: 참이면 수행 break;
default: 위 기능이 모두 거짓이면 수행;
} */

var n = parseInt(Math.random() * 5); //랜덤숫자 0~5까지 생성
var r;
switch(n){
    case 1:
    r = '1이나온 당신: 바보입니다.';
    break;
    case 2:
    r = '2이 나온 당신: 똑똑한 천재입니다.';
    break;
    case 3:
    r = '3이군요~ 희대의 명품얼굴을 가진 분이군요?.';
    break;
    case 4:
    r = '4로군요 오래오래 사실거예요.';
    break;
    case 5:
    r = '5가 나왔군요. ...답하지 않을거에요.';
    break;        
    default:
    r = '의외의 결과로군요... 사람...이신가요?';
}
console.log(n,':',r);

// ==================================================
// if, switch
// 삼항 연산자 : 3가지 항목을 가진 연산자기법
// (조건) ? 조건이면 수행 : 거짓이면 수행;
var i = 1;
(i > 10) ? console.log('i는 10보다 크다') : console.log('i는 10보다 작다')

/* if(조건1){조건1이 참이면}else if(조건1이 아닐때 조건2){조건2 참이면....}else if(){} else{} 
switch(매게변수){case 값1: ...break; case 값2: ...break; ...default: 최종;}
(조건) ? 조건이 ㅊ참이면 : 조건이 거짓이면; */
