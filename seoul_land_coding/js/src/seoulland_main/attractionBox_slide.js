// attractionBox_slide.js

(function($){
    var attractionWrap = $('.attraction_wrap');
    var slideBtnPart = attractionWrap.find('.attraction_button');
    var slideBtn = slideBtnPart.children('button');
    
    var attractionSlide = attractionWrap.find('.attraction_content');
    var attractionUl = attractionSlide.children('ul');
    var attractionLi = attractionUl.children('li');
    var liLen = attractionLi.length;
    
    var indexN = 0;
    var permission = true;
    var timed = 500;
    
    attractionLi.not($('.action')).hide();

    //'action'이라는 클라스이름이 몇번째 있는지 확인
    var actionIndex, actionCheck;
    var MyAactionIndex = function(){
        var i = 0 , actionCheck;
        for(; i<liLen; i+=1){
        actionCheck = attractionLi.eq(i).hasClass('action');
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
        attractionLi.eq(indexN).show();
        attractionLi.eq(actionIndex).fadeOut(timed,function(){
            attractionLi.eq(indexN).addClass('action');
            attractionLi.eq(indexN).siblings().removeClass('action');
           
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
        
        if(it === 'attraction_next_btn'){
            indexN += 1;
            if(indexN >= liLen){
                indexN = 0;
            }

            SlideAction();

        }else if(it === 'attraction_prev_btn'){
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