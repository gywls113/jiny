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