// test_slideBanner.js

(function($){
var viewBox = $('#viewBox'); // #viewBox 불러오기
var viewImg = viewBox.children('.view_img') // #viewBox안에 .view_img 불러오는 변수
var viewImgUl = viewImg.children('ul'); // .view_img안에 ul불러오는 변수
var viewImgLi = viewImgUl.children('li'); // .view_img 안에 ul안에 li불러 오는 변수 
var count = viewBox.find('.count'); // #viewBox안에 .count 불러는 변수
var totalSlineLen = viewImgLi.length; //viewImgLi의 li갯수 파악하는 변수
var permission = true; // 클릭시 여러번 넘어가지 않도록 제어해주기위한 변수
  
var viewImgLiLast = viewImgLi.eq(-1).clone(); // viewImgLi중 마지막 li를 복사
viewImgUl.prepend(viewImgLiLast); // viewImgUl안에 복사한 li를 맨 앞에 넣기

var reViewImgLi = viewImgUl.find('li'); //복사한 li를 집어 넣었기 때문에 다시한번 ul안에 li를 찾아주기
viewImgUl.css({'width': reViewImgLi.length * 100 + '%'}); //viewImgUl의 넓이값을 css에서 복사한 li를 포함한 갯수에 100%을 곱한것만큼 변경해주기
reViewImgLi.css({'width': (100 / reViewImgLi.length) + '%'}); // 넓어진 Ul을 100%로 봤을때 복사한 li를 합친 갯수로 나눠서 li값을 다시 지정해주기

var indicatorArea = viewBox.children('.view_indicator'); //#viewBox안의 .view_indicaotr를 불러오는 변수
var indiButton = indicatorArea.children('.view_indi_button'); // .view_indicaotr안의 .view_indi_button을 불러오는 변수
var nextSlideBtn = indiButton.children('.next_btn'); //.view_indi_button 안에있는 .next_btn을 불러오는 변수
var prevSlideBtn = indiButton.children('.prev_btn'); //.view_indi_button 안에있는 .prev_btn을 불러오는 변수
var indiUl = indicatorArea.find('ul'); //.view_indicator 안의 ul를 불러오는 변수
var indLi = indicatorArea.find('li'); //.view_indicator 안의 li를 불러오는 변수

var slideN = 0; // slideN이라는 임의의 값 변수
var timed = 3000; // 슬라이드가 몇초마다 넘어갈건지 초를 정해주는 변수
  
    
    // ***** 다음 슬라이드 버튼 
    nextSlideBtn.on('click',function(e){ //nextSlideBtn 을 클릭했을 때 함수 실행
        e.preventDefault(); //이전에 발생한 이벤트 초기화
        if(permission){ //permission을 걸어주는 if문
        permission = false; //참일 경우 해당 요소를 거짓으로 바꿔줌
        
            if(slideN >= viewImgLi.length-1){ // 만약 slide가 li의 갯수에서 -1한것보다 크다면(0부터 시작하니까 1빼주기)
            slideN = -1; // 임의의 변수값을 -1로 변경
            viewImgUl.stop().css({'marginLeft':slideN * -100 + '%'}); //css에서 해당하는 ul값으로 이동
        } 
        slideN += 1; // 임의의 변수에 1을 더해주기
        viewImgUl.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){ //-100%를 곱한만큼 애니매이션으로 이동하기
        
        setTimeout(function(){ //permission값을 시작
            permission=true; // permission값을 참으로 바꿔주기
        },1000); // permission이 참으로 바뀌고 1초 후에 기능을 수행하게 하기
        });
        indLi.eq(slideN).addClass('action'); // slideN번째 li에 action이라는 class이름 주기
        indLi.eq(slideN).siblings().removeClass('action'); // slideN번째 li의 형제들에는 action이라는 class이름 빼주기
        };  
        pageN (); //pageN함수 실행
    });
  
    // ***** 이전 슬라이드 버튼
    prevSlideBtn.on('click',function(e){ //prevSlideBtn 을 클릭했을 때 함수 실행
       e.preventDefault(); //이전에 발생한 이벤트 초기화
        if(permission){ //permission을 걸어주는 if문
        permission = false; //참일 경우 해당 요소를 거짓으로 바꿔줌
        slideN -= 1; // 임의의 변수에 1을 빼주기
        viewImgUl.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){ //-100%를 곱한만큼 애니매이션으로 이동하기
            if(slideN <= -1){ // 만약 slideN이 -1보다 작아진다면
            slideN = viewImgLi.length-1; //임의의 변수값을 li의 갯수에서 -1을 뺀로 변경
            viewImgUl.stop().css({'marginLeft':slideN * -100 + '%'}); //css에서 해당하는 ul값으로 이동
        }                      
        setTimeout(function(){ //permission값을 시작
            permission=true; // permission값을 참으로 바꿔주기
        },1000);  // permission이 참으로 바뀌고 1초 후에 기능을 수행하게 하기
        });
        indLi.eq(slideN).addClass('action'); // slideN번째 li에 action이라는 class이름 주기
        indLi.eq(slideN).siblings().removeClass('action'); // slideN번째 li의 형제들에는 action이라는 class이름 빼주기
        //pageN()-1; //아직 해결하지 못한 부분
        };
    });

    // ***** indicator
    indLi.on('click',function(e){ //indLif를 클릭했을때 함수를 실행해라
        e.preventDefault(); //이전에 발생한 이벤트 초기화

        var thisI = $(this); //클릭한 인디케이터
        slideN = thisI.index(); //클릭한 인디케이터의 순번
        viewImgUl.stop().animate({'marginLeft': slideN * -100 +'%'}); //-100%를 곱한만큼 애니매이션으로 이동하기
        indLi.eq(slideN).addClass('action');  // slideN번째 li에 action이라는 class이름 주기
        indLi.eq(slideN).siblings().removeClass('action'); // slideN번째 li의 형제들에는 action이라는 class이름 빼주기
        pageN(); //pageN함수 실행
    });      
        //indicaotr focus영역
        indLi.children('a').on('focus',function(e){ //indLid의 자식인 a에 focus가 잡혔을 때 함수 실행하기
          e.preventDefault(); //이전에 발생한 이벤트 초기화
          var its = $(this); //클릭한 인디케이터
          slideN = its.parent().index(); //클릭한 인디케이터의 순번

          viewImgUl.stop().animate({marginLeft:slideN * -100 + '%'}) //-100%를 곱한만큼 애니매이션으로 이동하기

          indLi.eq(slideN).addClass('action'); // slideN번째 li에 action이라는 class이름 주기
          indLi.eq(slideN).siblings().removeClass('action'); // slideN번째 li의 형제들에는 action이라는 class이름 빼주기
          pageN (); //pageN함수 실행
        });  
      

    // 시간
    var startInterval; //임의의 변수 startInterval
    var StartScroll = function(){ //함수를 startScroll이라는 변수로 지정하기
        startInterval = setInterval(function(){ //setInterval이라는 함수 실행하기
        
        slideN += 1; //임의의 변수 slideN에 1을 더하면
        viewImgUl.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){ //-100%를 곱한만큼 애니매이션으로 이동하고 함수를 수행하여라
        if(slideN >= viewImgLi.length-1){ //임의의 변수가 임의의 변수값을 li의 갯수에서 -1을 뺀것보다 크거나 작다면
        slideN = -1; //임의의 변수 slideN에 1을 빼면
        viewImgUl.stop().css({'marginLeft':slideN * -100 + '%'}); ////css에서 해당하는 ul값으로 이동
        }                      
        });
        indLi.eq(slideN).addClass('action'); // slideN번째 li에 action이라는 class이름 주기
        indLi.eq(slideN).siblings().removeClass('action'); // slideN번째 li의 형제들에는 action이라는 class이름 빼주기
        },timed);
    };
    StartScroll(); //위에서 지정해준 StartScroll함수 실행하기
    var StopScroll = function(){ //함수를 StopScroll이라는 변수로 지정하기
        clearInterval(startInterval); //startInterval이라는 반복명령어 종료하기
    };
    // mouse 올리면 일시정지/ mouse 떼면 재생
    viewBox.on({ //#viewBox에 대한 함수 실행
        'mouseenter':StopScroll, // 마우스를 올리면 스크롤을 멈춰라
        'mouseleave':StartScroll // 마우스가 떠나면 스크롤해라
    });
    
    // count_sdlide
    var conutPage = viewBox.find('.count_page'); //#viewBox안에있는 .count_page를 불러오는 변수
    var count = conutPage.find('.slide_now'); //.count_page안에 있는 .slide_now를 불러오는  변수
    var slideAll = conutPage.find('.slide_all'); //.count_page안에 있는 ..slide_all를 불러오는  변수
  
    var allPage = viewImgLi.length; //li의 갯수를 변수로 만들기
    var pageN = function(){ //pageN이라는 변수에 함수를 넣기
    var it = $(this); //선택한 그것
      slideN = indiUl.children('.action').index(); //ul의 자식인 li에 .action이 붙은걸 slideN이라고 지정
      count.text(slideN + 1); //.slide_now안에 slideN에 + 1 한 숫자를 삽입하기
    }
    slideAll.text(totalSlineLen); // .slide_all안에 전체의 li갯수를 삽입하기
  
})(jQuery);