//localNav_scroll_css.js

(function($){
    var win = $(window); 
    var localNav = $('#localNavBox');
    var localNavWrap = localNav.children('.local_nav_wrap');
    var localLi = localNavWrap.children('li');
    var localI = localLi.find('i');
    var qna = localNavWrap.find('.qusetion_area');
    
    var localOffset = localNav.offset().top; 
    //console.log(localOffset);
    // 로컬네비가 얼마나 떨어져있는가

    win.on('scroll',function(e){

        var winSt = win.scrollTop();
        //console.log(winSt);
        
        if(winSt >= 280){
            localNav.css({width:300+'px','backgroundColor':'transparent','paddingTop':450+'px','paddingLeft':0,paddingBottom:0});
            
            localLi.css({'lineHeight':50+'px',fontSize:0});           
            localI.css({height:'30px',borderRadius:'100%',border:"3px solid #888",boxSizing:'border-Box'});
            localI.css({height:'30px',borderRadius:'100%',border:"3px solid #888",boxSizing:'border-Box'});
            
            qna.css({display:'none'});
            
            localI.hover(function(){
               localLi.css({transform: 'none',fontSize: 16+'px',color:'#333', borderBottom: '3px solid var(--color-red)'}); 
            });
            
        }else {
            localNav.removeAttr('style');
            localLi.removeAttr('style');
            localI.removeAttr('style');
            qna.removeAttr('style');
        }
        
    });
    

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