//headBox_sns.js

(function($){
    
    var snsWrap = $('.sns_wrap');
    var shareIcon = snsWrap.find('.sns_mobile_icon');
    var snsBox = snsWrap.find('.snsBox');
    
    shareIcon.on('click',function(e){
        e.preventDefault();
        
        var snsBoxStatus = snsBox.css('display');
        
        if(snsBoxStatus === 'none'){
            snsBox.stop().fadeIn();
        }else{
            snsBox.stop().fadeOut();
        };
      console.log('snsBoxStatus')
    });

   
    
})(jQuery);