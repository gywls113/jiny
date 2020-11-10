// main.js

// 불러온 jQuery 버전 확인
// console.log($.fn.jquery);

// 1.css 문법을 이용하여 jQuery 문법으로 수정
// #navBox > ul > li:hover > ol {display: block;}

// #navBox > ul > li > a에 마우스를 올리거나 포커스를 잡을 경우
var navLink = $('#navBox > ul > li > a');
navLink.on('mouseenter focus', function(){
    // 마우스 올리거나 포커스 처리된 상태의 a 바로 뒤의 ol을 나타나게 만들기
    // 1. 마우스 올리거나 포커스처리된 상태의 a : $(this)
    navLink.next('ol').hide();
    $(this).next('ol').show();
});

// #navBox에서 마우스를 벗어나면 ol 사라지게 만들기
var navBox = $('#navBox');
navBox.on('mouseleave', function(){
    navBox.find('ol').hide();
});

//--------------------------------------------------
// .banner_context를 이벤트처리 (클릭)하면, 다른 기능(function)을 수행
var bannerContext = $('.banner_context');
var modalWin = $('.modal_window');
var closeBtn = modalWin.children('.close');
closeBtn.on('click', function(){
    modalWin.fadeOut();
});

bannerContext.on('click', function(){
    // .modal_window를 나타나게 만들기
    modalWin.fadeIn();
});

//.modal_window 자식인 .close버튼을 클릭시, 다음 기능을 수행