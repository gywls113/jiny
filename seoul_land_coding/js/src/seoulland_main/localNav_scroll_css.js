//localNav_scroll_css.js

(function($){
    var win = $(window); 
    var localNav = $('#localNavBox');
    var localNavWrap = localNav.children('.local_nav_wrap');
    var localLi = localNavWrap.children('li');
    var localI = localLi.find('i');
    var qna = localNavWrap.find('.qusetion_area');
    var lunaBox = $('#lunaBox');
    
    var localOffset = localNav.offset().top; 
    //console.log(localOffset);
    // 로컬네비가 얼마나 떨어져있는가
  

    win.on('scroll',function(e){
       
      var winSt = win.scrollTop();
      
      if(winSt >= 280){
      
          localNav.css({width:100+'px','backgroundColor':'transparent','paddingTop':450+'px','paddingLeft':0,paddingBottom:0});
          localLi.css({fontSize:0, transform:'none', color:'var(--color-orange)'});   
          localLi.find('a').css({'transform':'none'});
          localI.css({height:'30px',borderRadius:'100%',border:"3px solid #888",boxSizing:'border-Box', 'margin':0});
          qna.css({display:'none'});
        
//            localI.hover(
//              function(){
//               localLi.css({transform: 'none',fontSize: 16+'px',color:'#333', borderBottom: '3px solid var(--color-red)'}); 
//              });

          localLi.on('mouseenter', function(){
              $(this).addClass('on');
              $(this).siblings().removeClass('on');
              $(this).css({fontSize:'1rem'});
              $(this).siblings().css({fontSize:0});
              localNavWrap.removeClass('action');
  //            $(this).siblings().removeStyle();
  //            $(this).css({
  //              fontSize: 16+'px',color:'#333', 
  //              borderBottom: '3px solid var(--color-red)'});
  //            $(this).siblings().css({'lineHeight':50+'px',fontSize:0});
          });
          localNavWrap.on('mouseleave', function(){
            localLi.removeClass('action');
            localLi.removeClass('on');
            localLi.css({fontSize:0});
          });

      }else if(winSt < 280){

          localLi.off('mouseenter');
          localNavWrap.off('mouseleave');
          localNav.removeAttr('style');
          localLi.removeAttr('style');
          localI.removeAttr('style');
          qna.removeAttr('style');
          localLi.find('a').removeAttr('style');
          localNavWrap.addClass('action');
      }
        
    }); //=====win.scroll fin
    
})(jQuery);

/*
    #localNavBox {position: absolute; background-color:transparent;
         padding: 350px 90px 220px 180px;}
    .local_nav_wrap > li {line-height: 50px;font-size: 0;}
    .local_nav_wrap > li  i {height:30px; border-radius: 100%; 
        border: 3px solid #333; box-sizing: border-box;}
    .local_nav_wrap > li:hover {transform: none; font-size: 16px;
        color:#333; border-bottom: 3px solid var(--color-red);}
    .local_nav_wrap > li:hover i {background-color: var(--color-red);}
    .local_nav_wrap > li:nth-child(6) {display: none;}
*/