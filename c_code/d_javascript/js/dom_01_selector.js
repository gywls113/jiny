// dom_01_selector.js

var wrap = document.getElementById('wrap'); // $('#wrap');
wrap.style = 'background-color:#ccf;\
            border:2px solid #333'; 
// 줄바꿈 하고 싶을때는 역슬래쉬 꼭! 써줘야한다.

var headBox = document.getElementById('headBox'); 
headBox.style = 'width:100%; height:250px; background-color:#fa0';

var h1 = document.getElementsByTagName('h1')[0]; // $('h1');
h1.style = 'width:150px; height:50px; background-color:#acf;';

var h1Link = document.getElementsByTagName('a')[0]; // hi.find('a');
h1Link.style = 'color:#333; text-decoration:none;';

// var navBox = document.getElementById('navBox');
// 두개 같은 의미로 쓸 수 있다.
var navBox = document.querySelector('#navBox');
navBox.style = 'width:70%; padding:0; margin:auto; background-color:#fff;';
var navList = navBox.querySelectorAll('li');
// queryselector은 한개만 선택된다. li를 다 선택하고싶으면 
//navList.style = 'background-color:#f7c';
navList.forEach(function(data){
   data.style = 'background-color:#f7c; margin-bottom:2px;' 
});