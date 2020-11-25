// monfee_viewBox.js

//var count = 0;

//setTimeout(function(){},시간);
//setInterval(function(){},시간);
//clearInterval(setInterval함수이름);
/*
var go = setInterval(function(){
    count += 1;
    //console.log(count);
    if(count > 20){
        clearInterval(go);
    }
},1000);
*/

(function($){
    /*
    var count = 0;
    var start;
    var MyCount = function(){
        start= setInterval(function(){
            count += 1;
            console.log(count);
        },500);
    };
    
    $('h1').on('mouseenter',function(){
        clearInterval(start);    
    });
    $('h1').on('mouseleave', function(){
        count = 0; // 마우스를 다시 올리면 0부터 다시 시작한다.
        MyCount();
    })
    
    MyCount();
    */
    
    var viewBox = $('#viewBox');
    viewBox.css({'overflow':'hidden'});
    var backImg = viewBox.find('.back_image');
    var backLi = backImg.find('li');
    var permission = true; //귀신의집과 같은 느낌
    //순서를 언급시에는 eq()메소드를 사용 0~.......,-1,-2......fa-js
    //복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하게 하려면 true 매개변수를 입력
        
    //마지막요소 복제에의한 내용변경
    var backLiLast = backLi.eq(-1).clone(); 
    backImg.prepend(backLiLast); 

    var reBackLi = backImg.find('li') 
    backImg.css({'marginLeft':-100 + '%','width': reBackLi.length * 100 + '%'});
    reBackLi.css({'width': (100 / reBackLi.length) + '%'});
    //console.log(reBackLi.length);
    var indicator = viewBox.find('.slide_indicator');
    var indLi = indicator.find('li');
    
    
    //슬라이드 버튼
    var slideBtn = viewBox.find('.slide_btn');
    var nextSlideBtn = slideBtn.children('button').eq(0); 
    var prevSlideBtn = slideBtn.children('button').eq(1);
    //console.log(nextSlideBtn,prevSlideBtn);
    var slideN = 0; //최초의 값
    var timed = 2000; //일정시간마다 처리하게하는 시간
    
    nextSlideBtn.on('click',function(e){
        //a,button 요소처럼 이벤트기능이 이미 내장된 요소는 미리 해당 기능을 제거할 필요가 //있다.
        e.preventDefault();
        if(permission){
        permission = false;
        
        slideN += 1;
        //if(){}else{}
        //콜백함수
        backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN >= backLi.length-1){
            slideN = -1;
            backImg.stop().css({'left':slideN * -100 + '%'});
        }   
        setTimeout(function(){
            permission=true;
        },100);
            
        });
        indLi.eq(slideN).addClass('action');
        indLi.eq(slideN).siblings().removeClass('action');
        }    
    });
    
    prevSlideBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        slideN -= 1;
        backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN <= -1){
            slideN = backLi.length-1;
            backImg.stop().css({'left':slideN * -100 + '%'});
        }                      
        setTimeout(function(){
            permission=true;
        },100);
        });
        indLi.eq(slideN).addClass('action');
        indLi.eq(slideN).siblings().removeClass('action');
        };
    });
    
    //indicator 버튼
        indLi.on('click',function(e){
        e.preventDefault();
        
        var thisI = $(this);
        slideN = thisI.index();
        
        backImg.stop().animate({left:slideN * -100 + '%'})
        
        indLi.eq(slideN).addClass('action');
        indLi.eq(slideN).siblings().removeClass('action');
        //console.log(thisI);
    
    //indicator 포커스
        indiLi.childeren('a').on('focus',function(e){
            e.preventDefault();
            var thisI = $(this);
            slideN = its.parent().index();
            
            backImg.stop().animate({left:slideN * -100 + '%'})
        
            indLi.eq(slideN).addClass('action');
            indLi.eq(slideN).siblings().removeClass('action');
        });        
        
        
    });
    
    //광고영역 일정시간마다 자동수행/마우스 올릴경우 일시정지
    var startInterval;
    var Start = function(){
        startInterval = setInterval(function(){
            // trigger() 기능 - 대신 처리하는 방아쇠역할
            //nextSlideBtn.trigger('click');
            slideN += 1;
        //if(){}else{}
        //콜백함수
        backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN >= backLi.length-1){
            slideN = -1;
            backImg.stop().css({'left':slideN * -100 + '%'});
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
    /*
    //1.viewBox 마우스 올리면 일시정지
    
    viewBox.on('mouseenter',function(){
        StopSlide();
    });
    //2. viewBox 마우스 벗어나면 재실행
    viewBox.on('mouseleave',function(){
        Start();
    });
     */
    //1,2번을 같이 사용하는 경우
    viewBox.on({
        'mouseenter':StopSlide,
        'mouseleave':Start
    });
   
    
    
    

//jQuery 끝
})(jQuery);

/* 
jQuery 선택자
#box -> $('#box');
.box -> $('.box');
ul>li -> $('ul>li'); -> $('ul').children('li');
ul li -> $('ul li'); -> $('ul').find('li');
dt+dd -> $('dt+dd'); -> $('dt').next('dd');
dt~dd -> $('dt~dd'); -> $('dt').nextAll('dd');
이전형제선택하기 -> $('dt').prev('dd');
이전형제모두선택하기 -> $('dt').prevAll('dd');
자신을 제외한 형제 -> $('dt').siblings('dd');
부모형제를 선택 -> $('dt').parent('dl'); $('dt').parentUntil('body');
*/
/*
css
선택자.style.backgroundColor = '#acf';
선택자.style = 'backgroundColor:#fca; color:#fff';
선택자.css({'속성명':'속성값', '속성명':'속성값' ...});
*/
/*
var reFn = function(i){
    i =+1;
    console.log(i);
    if(i < 20){
        reFn(i);
    }else{console.log('20이 되었습니다.');}
}
reFn(1);
*/

/*
jQuery에서 콜백함수란?

하나의 메소드(함수)를 수행한 후에, 다시 함수를 수행 할 수 있도록 처리하는 형태
단, animation기능을 가진 메소드 내에서만 콜백함수의 기능을 가질 수 있다.

선택자.on('click',function(){
    선택자.animatie({기능수행},function(){})
});
*/