// test_scrollTop.js

(function($){
    var win = $(window);
    var wrap = $('#wrap');

    /*
    offset().top, offset().left ->
    브라우저 기준 0,0좌표에서 부터 선택자가 얼만큼 떨어져 있는지를  판단하는 기능
    */
    
    var headBox = $('#headBox');
    var offsetTop = headBox.offset().top; 
  
    //console.log(offsetTop);
    win.on('scroll',function(){
       var st = win.scrollTop();
       //console.log(st);
        
       if(offsetTop < st){
           headBox.css({'position':'fixed','top':0})
       }else{
           headBox.removeAttr('style');
       }
    });
    
})(jQuery);