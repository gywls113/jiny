// jq_03_1_scroll.js

(function($){
    var win = $(window);
    var wrap = $('#wrap');
    //wrap.height(3000); // 이렇게 css 높이값을 설정할 수 도 있다. 잘 사용X
    wrap.css({'height' : 3000 + 'px',
             'backgroundImage' : 'linear-gradient(45deg,#ccc,#fca)'});
    
    /*
    offset().top, offset().left ->
    브라우저 기준 0,0좌표에서 부터 선택자가 얼만큼 떨어져 있는지를  판단하는 기능
    */
    
    var fix = $('.fix');
    var offsetTop = fix.offset().top; // 선택자가 얼만큼 떨어져있는가?
    //console.log(offsetTop);
    win.on('scroll',function(){
       var st = win.scrollTop(); // 스크롤이 얼만큼 이동했는가?
       //console.log(st);
        
       if(offsetTop < st){
           fix.css({'position':'fixed'})
       }else{
           fix.removeAttr('style');
       }
    });
    
})(jQuery);