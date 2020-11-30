//footBox_familysite.js
(function($){
    var familySiteArea = $('.family_site_area');
    var familyDl = familySiteArea.children('dl');
    var familyDt = familyDl.children('dt');
    var familyDd = familyDl.children('dd');
    
    familyDt.on('click',function(e){
        e.preventDefault();
        
        var it = $(this);
        
        it.next('dd').stop().slideToggle(function(){
            var ddDisplay = it.next('dd').css('display');
            
        if(ddDisplay === 'block'){
            it.addClass('footer_action');
            it.siblings('dt').removeClass('action');
        }else if(ddDisplay === 'none')
            it.removeClass('footer_action');
        });
        
        it.next('dd').siblings('dd').stop().slideUp();
    });
})(jQuery);

