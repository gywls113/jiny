// test_topButton.js
(function($){
  var win  = $(window);
  var topBtn = $('.scroll_top');
  
  topBtn.hide();
  
  win.on('scroll',function(e){
    
    var winScrollTop = win.scrollTop();
    
    (winScrollTop >= 300) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut();
  });
})(jQuery);