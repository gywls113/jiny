// jq_ex_accordion.js

(function($){
    var part_01 = $('.part').eq(0);
    var accor_01 = part_01.children('.accordion_01');
    var accor_01Dl = accor_01.children('dl');
    var accor_01Dt = accor_01Dl.children('dt');
    
    //dt를 클릭하여 기능을 수행
    accor_01Dt.on('click',function(e){
        e.preventDefault();
        //console.log($(this));
        
        var it = $(this);
        it.siblings('dd').stop().slideToggle(function(){
        var itDdDisplay = it.siblings('dd').eq(0).css('display'); 
        // 그것의 형제중 첫번째 dd의 display 상태 파악
        //console.log(itDdDisplay);
            
        if(itDdDisplay === 'block'){
            it.addClass('action');   it.parent('dl').stop().siblings().children('dt').removeClass('action');
        }else if(itDdDisplay === 'none')
            it.removeClass('action');
        });
        
        it.parent('dl').stop().siblings().children('dd').slideUp();
        // 그것의 부모요소 (dl)의 형제요소(siblings)의 자식인 dd를 사라지게 만들어라.
        
        
        //if(){
        //   
        //   }
    })
    
})(jQuery);