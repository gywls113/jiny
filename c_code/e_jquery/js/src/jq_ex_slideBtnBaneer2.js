// jq_ex_slideBtnBaneer2.js

(function($){
    var slide = $('.slide_02');
    var slideBtnPart = slide.find('.slide_btn');
    var slideBtn = slideBtnPart.children('button');
    
    var indexSlide = slide.find('.index_slide');
    var slideLi = indexSlide.find('li');
    var liLen = slideLi.length;
    
    var indexN = 0;
    var permission = true;
    var timed = 500;
    
    slideLi.not($('.action')).hide();
    /* 위에꺼랑 같은내용
    slideLi.hide();
    indexSlide.find('.action').show();
    */
    
    //'action'이라는 클라스이름이 몇번째 있는지 확인
    var actionIndex, actionCheck;
    var MyAactionIndex = function(){
        var i = 0 , actionCheck;
        for(; i<liLen; i+=1){
        actionCheck = slideLi.eq(i).hasClass('action');
        if(actionCheck){
            actionIndex = i;
            break;
        }
    }
    //console.log(actionIndex);
    return actionIndex;
    }
    // =============================

    var SlideAction = function(){
        slideLi.eq(indexN).show();
        slideLi.eq(actionIndex).fadeOut(timed,function(){
            slideLi.eq(indexN).addClass('action');
            slideLi.eq(indexN).siblings().removeClass('action');
           
            setTimeout(function(){
                permission = true;
            },timed);
        });
    }; //SlideAction()
    
    // =============================
    
    slideBtn.on('click',function(e){
        e.preventDefault();
        MyAactionIndex();
        
        if(permission){
        permission = false;
        
        var it = $(this).attr('class');
        
        if(it === 'next'){
            indexN += 1;
            if(indexN >= liLen){
                indexN = 0;
            }
            //slideLi.eq(indexN).show();
            //slideLi.eq(actionIndex).fadeOut(function(){
            //    slideLi.eq(indexN).addClass('action');
            //    slideLi.eq(indexN).siblings().removeClass('action');
            //});
            SlideAction();

        }else if(it === 'prev'){
            indexN -= 1;
        
            SlideAction();
            if(indexN <= -1){
                indexN = liLen -1;
            }   
        } //(if === 'prev') End
        
        console.log(indexN);
    }
    }); // slideBtn.on('click') End
    
})(jQuery);