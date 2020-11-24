// test_slideBanner.js

(function($){
var viewBox = $('#viewBox');
var viewImg = viewBox.children('.view_img')
var viewImgUl = viewImg.children('ul'); 
var viewImgLi = viewImgUl.children('li');
var permission = true;

var viewImgLiLast = viewImgLi.eq(-1).clone(); 
viewImgUl.prepend(viewImgLiLast); 

var reViewImgLi = viewImgUl.find('li'); 
viewImgUl.css({'marginLeft':-100 + '%','width': reViewImgLi.length * 100 + '%'});
reViewImgLi.css({'width': (100 / reViewImgLi.length) + '%'});

var indicatorArea = viewBox.children('.view_indicator');
var indiButton = indicatorArea.children('.view_indi_button');
var nextSlideBtn = indiButton.children('.next_btn');
var prevSlideBtn = indiButton.children('.prev_btn');

var slideN = 0;
var timed = 1500;
   
var indicator = viewBox.find('.view_indicator');
var indLi = indicator.find('li');
    
    //다음 슬라이드 버튼
    nextSlideBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        
        slideN += 1;
        viewImgUl.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){
            if(slideN >= viewImgLi.length-1){
            slideN = -1;
            viewImgUl.stop().css({'marginLeft':slideN * -100 + '%'});
        } 
        
        console.log(slideN);
        setTimeout(function(){
            permission=true;
        },100);    
        });
        indLi.eq(slideN).addClass('action');
        indLi.eq(slideN).siblings().removeClass('action');
        }  
    });
  
    //이전 슬라이드 버튼
    prevSlideBtn.on('click',function(e){
       e.preventDefault();
        if(permission){
        permission = false;
        slideN -= 1;
        viewImgUl.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){
            if(slideN <= -1){
            slideN = viewImgLi.length-1;
            viewImgUl.stop().css({'marginLeft':slideN * -100 + '%'});
        }                      
        setTimeout(function(){
            permission=true;
        },100);
        });
        indLi.eq(slideN).addClass('action');
        indLi.eq(slideN).siblings().removeClass('action');
        };
    });

    // indicator
    indLi.on('click',function(e){
        e.preventDefault();

        var thisI = $(this);
        slideN = thisI.index();
        viewImgUl.stop().animate({'marginLeft': slideN * -100 +'%'});
        indLi.eq(slideN).addClass('action');
        indLi.eq(slideN).siblings().removeClass('action');
        /*
          indLi.childeren('a').on('focus',function(e){
            e.preventDefault();
            var thisI = $(this);
            slideN = its.parent().index();

            viewImgUl.stop().animate({marginLeft:slideN * -100 + '%'})

            indLi.eq(slideN).addClass('action');
            indLi.eq(slideN).siblings().removeClass('action');

            indiLi.childeren('a').on('focus',function(e){
            e.preventDefault();
            var thisI = $(this);
            slideN = its.parent().index();

            viewImgUl.stop().animate({marginLeft:slideN * -100 + '%'})

            indLi.eq(slideN).addClass('action');
            indLi.eq(slideN).siblings().removeClass('action');
            });
        }); */   
    });
  
    // 시간
    var startInterval;
    var Start = function(){
        startInterval = setInterval(function(){

        viewImgUl.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){
            if(slideN >= viewImgLi.length-1){
            slideN = -1;
            viewImgUl.stop().css({'marginLeft':slideN * -100 + '%'});
        }            
        });
        indLi.eq(slideN).addClass('action');
        indLi.eq(slideN).siblings().removeClass('action'); 
        },timed);
    };
    Start();
    var StopSlide = function(){
        clearInterval(startInterval);
    };

    viewBox.on({
        'mouseenter':StopSlide,
        'mouseleave':Start
    });
  
  
})(jQuery);




