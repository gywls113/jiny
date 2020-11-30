//viewBox_slide.js
(function($){
    var viewBox = $('#viewBox');
    var viewImgWrap = viewBox.find('.view_img_wrap');
    var viewImgUl = viewImgWrap.find('ul');
    var viewImgLi = viewImgUl.children('li');
    
    var LiClone = viewImgLi.eq(-1).clone();
    viewImgUl.prepend(LiClone);
    var reViewImgLi = viewImgUl.find('li');
    viewImgUl.css({'marginLeft' : -100 + '%', 'width':reViewImgLi.length * 100 + '%'});
    reViewImgLi.css({'width': (100/reViewImgLi.length) + '%'});

    
    var viewIndicator = $('.view_indicator');
    var viewIndiUl = viewIndicator.children('ul');
    var viewIndiLi = viewIndiUl.children('li');
    
    var timed = 3000;
    
    
    // 인디케이터 클릭하면 넘어가기
    viewIndiLi.children('a').on('click focus',function(e){
        e.preventDefault();

        var it = $(this);
        var itI = it.parent('li').index();
        
        viewIndiLi.eq(itI).siblings().removeClass('view_action');
        viewIndiLi.eq(itI).addClass('view_action');
        
        if(e.type === 'focus'){
            viewImgUl.stop().animate({'left': itI * -100 +'%'});
        }else if(e.type === 'click'){
            viewImgUl.stop().animate({'left': itI * -100 +'%'});
        };
    });
    
    
    //자동으로 슬라이드 넘어가기
    var slideN = 0;
    var startInterval;
    var Start = function(){
        startInterval = setInterval(function(){

        slideN += 1;

        viewImgUl.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN >= viewIndiLi.length-1){
            slideN = -1;
            viewImgUl.stop().css({'left':slideN * -100 + '%'});
        }            
        });
        viewIndiLi.eq(slideN).addClass('view_action');
        viewIndiLi.eq(slideN).siblings().removeClass('view_action'); 
        },timed);
    };
    Start();
    var StopSlide = function(){
        clearInterval(startInterval);
    };
    
    
    //마우스 가져가면 stop 떼면 start
    viewBox.on({
        'mouseenter':StopSlide,
        'mouseleave':Start
    });

    
})(jQuery);

