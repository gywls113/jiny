// promotionBox_slide.js

(function($){
var proFull = $('.pro_full_wrap');
var proWrap = proFull.find('.promotion_wrap');
var proUl = proWrap.find('ul'); 
var proLi = proUl.children('li');
var permission = true;

var liClone = proLi.eq(-1).clone(); 
proUl.prepend(liClone); 

var reproLi = proUl.find('li') 
proUl.css({'marginLeft':-100 + '%','width': reproLi.length * 100 + '%'});
reproLi.css({'width': (100 / reproLi.length) + '%'});

//슬라이드 버튼
var proButton = proFull.find('.promotion_btn');
var proNextBtn = proButton.children('.promotion_next_btn'); 
var proPrevBtn = proButton.children('.promotion_prev_btn'); 

var slideN = 0;
    proNextBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        
        slideN += 1;
        proUl.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN >= proLi.length-1){
            slideN = -1;
            proUl.stop().css({'left':slideN * -100 + '%'});
        }   
        setTimeout(function(){
            permission=true;
        },100);    
        });
        }  
    });
    
    proPrevBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        slideN -= 1;
        proUl.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN <= -1){
            slideN = proLi.length-1;
            proUl.stop().css({'left':slideN * -100 + '%'});
        }                      
        setTimeout(function(){
            permission=true;
        },100);
        });
        };
    });
})(jQuery);
