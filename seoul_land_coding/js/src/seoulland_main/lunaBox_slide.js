// lunaBox_slide.js

(function($){
var lunaFull = $('.luna_full_wrap');
var lunaWrap = lunaFull.find('.luna_wrap');
var lunaUl = lunaWrap.find('ul'); 
var lunaLi = lunaUl.children('li');
var permission = true;

var liClone = lunaLi.eq(-1).clone(); 
lunaUl.prepend(liClone); 

var reLunaLi = lunaUl.find('li') 
lunaUl.css({'marginLeft':-100 + '%','width': reLunaLi.length * 100 + '%'});
reLunaLi.css({'width': (100 / reLunaLi.length) + '%'});

//슬라이드 버튼
var lunaButton = lunaFull.find('.luna_button');
var lunaNextBtn = lunaButton.children('.luna_next_btn'); 
var lunaPrevBtn = lunaButton.children('.luna_prev_btn'); 

var slideN = 0;
    lunaNextBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        
        slideN += 1;
        lunaUl.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN >= lunaLi.length-1){
            slideN = -1;
            lunaUl.stop().css({'left':slideN * -100 + '%'});
        }   
        setTimeout(function(){
            permission=true;
        },100);    
        });
        }  
    });
    
    lunaPrevBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        slideN -= 1;
        lunaUl.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN <= -1){
            slideN = lunaLi.length-1;
            lunaUl.stop().css({'left':slideN * -100 + '%'});
        }                      
        setTimeout(function(){
            permission=true;
        },100);
        });
        };
    });
})(jQuery);
