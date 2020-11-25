// test_topButton.js
(function($){
  var win  = $(window); //전체 브라우저를 변수로 지정
  var topBtn = $('.scroll_top'); // .scroll_top라는 변수
  
  topBtn.hide(); //.scroll_top를 숨기기
  
  win.on('scroll',function(e){ //window를 스크롤했을 때 함수를 실행하기
    
    var winScrollTop = win.scrollTop(); //window의 스크롤한 위치를 변수로 지정
    
    (winScrollTop >= 300) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); // window를 스크롤 한 수치가 300보다 작으면 .scroll_top을 숨기고 크면 보여라
  });
})(jQuery);