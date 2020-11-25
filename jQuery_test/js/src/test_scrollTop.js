// test_scrollTop.js

(function($){
    var win = $(window); //전체 브라우저를 변수로 지정
    var wrap = $('#wrap'); //#wrap을 변수로 지정
    
    var headBox = $('#headBox'); //#headBox를 변수로 지정
    var offsetTop = headBox.offset().top; //headBox가 얼마나 내려왔는지 확인하는 변수

    win.on('scroll',function(){ //브라우저를 스크롤했을 때 함수를 실행해라
       var st = win.scrollTop(); //브라우저를 스크롤한 수치를 변수로 지정

       if(offsetTop < st){ //브라우저를 스크롤한 수치보다 headBox가 작으면 
           headBox.css({'position':'fixed','top':0}) //headBox를 top:0의 위치에 고정시켜라
       }else{ //그 외에는
           headBox.removeAttr('style'); //headBox의 if에서 지정해준 css를 지워라
       }
    });
    
})(jQuery);