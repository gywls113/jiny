//viewBox_indicator_remove.js

(function($){
    var win = $(window); 
    var viewBox = $('#viewBox');
    var viewIndi = $('.view_indicator');
    var localNav = $('.local_nav_wrap');
    
    var localHeight = localNav.outerHeight(); // 로컬네비 전체를 감싸는 높이
    var localOffset = localNav.offset().top; // 로컬네비가 얼마나 떨어져있는가
    var localBottom = localOffset + localHeight; // 인디케이터 전까지의 높이값
    
    //브라우저 상단에 떨어져있는 양 체크
    var viewIndiOffset = viewIndi.offset().top;
    console.log(viewIndiOffset);

    var offsetRel = viewIndiOffset - localBottom; // 로컬네비와 인디케이터 사이의 갭
        
    //viewIndi.hide();
    
    //1. 스크롤시 $('#headBox')상단 고정
    win.on('scroll',function(e){
        // 스크롤이 이동한 위치값을 파악
        var winSt = win.scrollTop();
        console.log(winSt);
        
        if(winSt >= offsetRel){
            viewIndi.stop().fadeOut();
        }else{
            viewIndi.stop().fadeIn();          
        };  
        
    });
    

})(jQuery);