// jq_ex_slideBtnBaneer.js

(function($){
//console.log($.fn); //jQery 연결 확인 및 버전 체크
    
//slide 기능 만들기1
var slide_01 = $('.slide_01');
var s_01_btn = slide_01.children('.slide_btn');
var s_01_button = s_01_btn.children('button');
s_01_btn.css({'zIndex':100});
    
var s_01_wrap = slide_01.children('.slide_wrap');
var s_01_Ul = s_01_wrap.children('ul');
var before_s_01_Li = s_01_Ul.children('li');

//마지막요소 복제하여 앞에 붙임 - 전체 가로값 변경, 내부 li크기 변경
var cloneLastLi_s_01 = before_s_01_Li.eq(-1).clone(true);
s_01_Ul.prepend(cloneLastLi_s_01);
//cloneLastLi_s_01.prependTo(s_01_Ul); 위에꺼랑 같은뜻
var re_s_01_li = s_01_Ul.children('li');
s_01_Ul.css({'width':re_s_01_li.length * 100 + '%','position':'relative', 'left':'-100%'});
re_s_01_li.css ({'width':100/re_s_01_li.length + '%'});    
    
var slideN = 0;    
var permission = true;
var timed = 500;
//console.log($('button.next')[0]);

//1.각각의 버튼을 분리하여 따로 처리하는 방식
/*
s_01_btn.children('.next').on('click',function(e){
    e.preventDefault();
    if(permission){
    
    permission = false;

    if(slideN >= before_s_01_Li.length -1){
        slideN = -1;
        s_01_Ul.css({marginLeft:slideN * -100 + '%'});
    };
    slideN += 1;
    s_01_Ul.stop().animate({marginLeft:slideN * -100 + '%'},function(){
        setTimeout(function(){
        permission = true;
        },timed);
    });
    }//if(permission)End
});     

s_01_btn.children('.prev').on('click',function(e){
    e.preventDefault();
        if(permission){
    permission = false;
    var it = $(this);
    slideN -= 1;
    s_01_Ul.stop().animate({marginLeft:slideN * -100 + '%'},function(){
    if(slideN <= -1){
        slideN = before_s_01_Li.length -1;
        s_01_Ul.css({marginLeft:slideN * -100 + '%'});
    };
        setTimeout(function(){
            permission=true;
        },timed);
    });
    }//if(permission)End
});
*/
//2. 동일한 역할을 하는 버튼을 묶어서 그 기능에따라 처리하도록 하는 방법
// button요소 클릭시 해당요소 파악하기


s_01_button.on('click',function(e){
    e.preventDefault();
    if(permission){
    permission = false;
        
    // console.log($(this));
     
    //var it = $(this);
    //var itClass = it.attr('class');
    
    if(itClass === 'next'){
        //다음버튼 클릭시
        //console.log('next');
        
        if(slideN >= before_s_01_Li.length -1){
        slideN = -1;
        s_01_Ul.css({marginLeft:slideN * -100 + '%'});
        };  
        
        slideN += 1;
        s_01_Ul.animate({marginLeft:slideN * -100 + '%'},function(){

    });
    }else if(itClass === 'prev'){
        //이전버튼 클릭시
        //console.log('prev');
        slideN -= 1;
        /*
        s_01_Ul.animate({marginLeft:slideN * -100 + '%'},function(){
        if(slideN <= -1){
            slideN = before_s_01_Li.length -1;
    };
            s_01_Ul.css({marginLeft:slideN * -100 + '%'});
   }); */
};// else if(itClass ==='prev') End ------------
        
//통합기능
s_01_Ul.animate({marginLeft:slideN * -100 + '%'},function(){
    if(slideN <= -1){
        slideN = before_s_01_Li.length -1;
        s_01_Ul.css({marginLeft:slideN * -100 + '%'});
    };
    setTimeout(function(){
        permission = true;
    },timed/5);
        
}// if(permission)End
});
  
//jQuery End ----------------
})(jQuery);