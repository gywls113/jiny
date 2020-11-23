// jq_ex_mousewheel.js

(function($){
  var web = $('html,body');
  var wrap = $('#wrap');
  var permission = true;
  // 터치패드나 트랙패드같은 경우는 수치를 잘 몰라서 제한없이 마구잡이로 움직이기 때문에 permission으로 제한을 걸어줘야한다.
  var count = 0;
  var pageOffset = [];
  var pageRoll = $('.page_roll');
  
  var i= 0;
  for(; i<pageRoll.length; i+=1){
    pageOffset[i] = pageRoll.eq(i).offset().top;
  }
  //console.log(pageOffset);
  
  web.animate({scrollTop:0});
  //web.scrollTop(0);
  wrap.on('mousewheel DOMMousescroll', function(e){
    //마우스 휠 움직임 파악하기
    //-파이어폭스 외 다른 브라우저
    //console.log(e.originalEvent.wheelDelta);
    //-파이어폭스
    //console.log(e.originalEvent.detail);
    e.preventDefault();
    if(permission){
      permission=false;
    
    
    var eOriginal = e.originalEvent;
    
    //수치값을 가질 수 있는지 여부 확인(반대성향으로 처리)
    //console.log(!eOriginal.wheelDelta);
    
    var mWheel
    if(!eOriginal.wheelDelta){
      //firefox브라우저에서 처리
      mWheel = eOriginal.detail * -40; // 3, -3
      
    }else{
      //firefox 이외의 브라우저
      mWheel = eOriginal.wheelDelta; // -120, 120
    }
    
    //console.log(mWheel);
    
    if(mWheel < 0 && count < pageOffset.length-1){//휠을 아래로 스크롤시
      count += 1;
    }else if(mWheel > 0 && count > 0){//휠을 위로 스크롤시
      count -= 1;
    }
    //console.log(count,':',pageOffset[count])
    
    web.animate({scrollTop:pageOffset[count] + 'px'},function(){
      permission=true;
    });
    
    //터치마우스 또는 노트북에 들어있는 터치패드나 트랙패드 등과 같은 경우는 수치가 일정하지 않는다. -> if문을 이용하여 처리
    
    }; // if(permission)
  });
})(jQuery);