// seoul_land_main.js

(function($){
    var win = $(window);
    var doc = $('html, body');
    var wrap = $('#wrap');
    var permission = true;
    var winH = win.outerHeight(true);
    var i = 0;
    win.on('mousewheel DOMMouseScroll',function(e){
      e.preventDefault();
      if(permission){
        permission = false; 
        
        var eType = e.type;
        var originalEvt = e.originalEvent;
        var wheelDelta;

        if(eType == 'DOMMouseScroll'){
           
            wheelDelta = originalEvt.detail * -40;
        }else{
            wheelDelta = originalEvt.wheelDelta;
        }
      
        if(wheelDelta < 0 && i >= 0){
          i += 1; 
          doc.animate({ scrollTop: winH  * i  + 'px'}, function(){
            permission = true;
          });
        }else if(i >= 0){
          i -= 1; 
          doc.animate({ scrollTop:winH  * i  + 'px'}, function(){
            permission = true;
          });
        }else{
          i=0
            doc.animate({ scrollTop:0}, function(){
            permission = true;
            });
        }
      
      }
    });

 
})(jQuery);