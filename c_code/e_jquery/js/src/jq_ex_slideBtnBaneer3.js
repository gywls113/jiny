// jq_ex_slideBtnBaneer3.js

(function($){
    
    var indiSlide = $('.indicator_horizontal_slide');
    var indi = indiSlide.find('.indicator');
    var indiLi = indi.find('li');
    
    var slide = indiSlide.find('.slide_wrap');
    var slideUl = slide.children('ul');
    var slideLi = slideUl.children('li');
    var slideLiLink = slideLi.children('a');
    
    var permission = true;
    var timed = 400; 
    var slideN = 0;
    
    //slide_wrap 내부 a focus기능 강제 비처리
    slideLiLink.attr({'tabIndex':'-1'});
    
    var typeTest = function(evt){
        //console.log(evt.type); 
        if(permission && evt.type == 'focus'){
            permission = false;
            console.log('포커스 처리되었음');
        }else if(permission && evt.type === 'click'){
            permission = false;
            console.log('클릭되었음');
        }else {
            console.log('...');
        }
        /* switch(evt.type){
            case 'focus':
            case 'click':
                console.log('f');
                //console.log('c');
        }  */
    };
    
    //indicator클릭시 ul이동 -> a에 focus처리로 변경하고, 실제 배너에 a는 별도로 foucs 처리

    indiLi.children('a').on('focus',function(e){
        e.preventDefault();
        
        typeTest(e);
        
        var it = $(this);
        slideN = it.parent('li').index();
        
        slideUl.stop().css({'marginLeft':slideN * -100 + '%'});
        indiLi.eq(slideN).addClass('action');
        indiLi.eq(slideN).siblings().removeClass('action');
        
        //console.log(slideN);

    });
    
    //클릭기능은 포커스처리로 변경했기에 잠깐 보류
    indiLi.on('click',function(e){
        e.preventDefault();
        
        typeTest(e);
        
        var it = $(this);
        slideN = it.index();
        var propertyLink = it.children('a').attr('href');
        //console.log(propertyLink);
        var thatPosition = $(propertyLink);
        
        slideUl.stop().css({'marginLeft':slideN * -100 + '%'});
        indiLi.eq(slideN).addClass('action');
        indiLi.eq(slideN).siblings().removeClass('action');
        
        thatPosition.attr({'tabIndex':'0'});
        thatPosition.focus();
    });

})(jQuery);