// work_landing.js

(function($){

  var win = $(window);
  var workBox = $('#workBox');
  var portfolioBox = $('#portfolioBox');

  var winH = win.outerHeight() / 4 * 3;

  var workBoxOffset = workBox.offset().top;
  var portfolioBoxOffset = portfolioBox.offset().top;
  //console.log( workBoxOffset, portfolioBoxOffset );

  win.on('scroll', function(e){
    var getScroll = win.scrollTop(); // 스크롤 값
    // console.log( getScroll );
    var workBoxScroll;
    
    // 스크롤값이, 
    // conBox의 offset().top (에서 브라우저 높이값 일부빠진만큼)보다 크면 수행
    if(getScroll >= workBoxOffset - winH){
      workBox.addClass('action');
      workBoxScroll = getScroll - (workBoxOffset - winH);
      workBox.css({'backgroundPositionY' :( -workBoxScroll/3) + 'px'});
      //console.log('workBoxScroll:', workBoxScroll);
    }else{
      workBox.removeClass('action');
    }

    // moreBox offset().top (에서 브라우저 높이값 일부빠진만큼)보다 크면 수행
    // 더 값이 커졌을때, moreBox offset값이 화면의 상단에 위치하면 수행
    // 조건문에서는 앞의기능이 참이면 뒤의값은 전혀 수행하지 않는다.
    if(getScroll >= portfolioBoxOffset - (winH/2)){
      portfolioBox.addClass('more');
      portfolioBox.removeClass('action');
    }else if(getScroll >= portfolioBoxOffset - winH){
      portfolioBox.addClass('action');
      portfolioBox.removeClass('more');
    }else{
      portfolioBox.removeClass('action');
      portfolioBox.removeClass('more');
    }

  });

})(jQuery)