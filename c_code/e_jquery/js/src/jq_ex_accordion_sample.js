// jq_ex_accordion_sample.js

(function($){
    var part = $('.part');
    var accor = part.children('.accor');
    var accorDt = accor.children('dt');
    var accorDd = accor.children('dd')
    
    accorDt.on('click',function(e){
        e.preventDefault();
        
        var it = $(this);
        
        it.next('dd').stop().slideToggle(function(){
        var itDdDisplay = it.next('dd').css('display'); 
          
        if(itDdDisplay === 'block'){
            it.addClass('action');   
            it.siblings('dt').removeClass('action');
        }else if(itDdDisplay === 'none')
            it.removeClass('action'); 
        });
        
        it.next('dd').siblings('dd').stop().slideUp();
    });
    
})(jQuery);