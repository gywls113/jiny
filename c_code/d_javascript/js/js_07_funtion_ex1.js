//js_07_funtion_ex1.js

var btnEl = document.getElementsByClassName('btn')[0];
// console.log(btnEl);
var btnChildButton = btnEl.childNodes[0];
// console.log(btnChildButton)
var resultBox = document.getElementsByClassName('result')[0];
// console.log(resultBox);
// 줄바꿈해서 white-space가 생겼을 경우에는 [1]로 써야한다.

// 1. 버튼을 클릭하면
// 2. resultBox내부의 색상을 변경

// 1 -> 버튼, 이벤트(수행)
// 2 -> 이벤트 발생에 의해 -> resultBox색상변경 수행 
var myBg = function(){
    resultBox.style.backgroundColor = '#7ff';
};
btnChildButton.addEventListener('click', myBg );

//똑같이 사용할 수 있는 방법
//btnChildButton.addEventListener('click', function(){
//    resultBox.style.backgroundColor = '#7ff';
//});