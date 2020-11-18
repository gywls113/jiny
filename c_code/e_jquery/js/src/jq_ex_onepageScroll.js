//

(function($){ //jQuery start
    /*
    순서
    1. 스크롤시 $('#headBox')상단 고정
    1-1. 상단이동버튼 기능추가
    2. $('.popup_dp')의 닫기버튼 클릭시 팝업창 삭제
    */
    
    
    //1번 사용시 : offset().top, scrollTop, on('scroll'), $(window)
    
    var win = $(window); //브라우저 자체! ''처리하지않아도 된다!
    var headBox  = $('#headBox');
    var nav = $('#navBox');
    var navBtn = nav.find('li')
    var topBtn = $('.top_move_btn');
    
    //브라우저 상단에 떨어져있는 양 체크
    var headOffset = headBox.offset().top;
    //console.log(headOffset);
    
    topBtn.hide();
    
    //1. 스크롤시 $('#headBox')상단 고정
    win.on('scroll',function(e){
        // 스크롤이 이동한 위치값을 파악
        var winSt = win.scrollTop();
        //console.log(winSt);
        
        if(winSt >= headOffset){
            headBox.css({'position':'fixed', 'top':'0', 'zIndex':'1500'});
        }else{
            headBox.removeAttr('style');
        }
        //처리되어야하는 값이 하나하나밖에 없는 경우에는 이렇게 한줄로도 표현 가능하다.
        //(winSt >= headOffset) ?  headBox.css({'position':'fixed', 'top':'0', 'zIndex':'1500'}) : headBox.removeAttr('style'); ;
        
        // 1-1. 보이지 않았다가 500px이동후에 나타나기
        if(winSt >= 500){
            topBtn.stop().fadeIn();
        }else{
            topBtn.stop().fadeOut();          
        };  
        //(winSt >= 500) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); 
        // ============= winSt >= headBox End
        
    }); // scroll End ========================================
    
    // 클릭시 처리되는 내용을 별도의 함수로 처리
    var liScrollMove = function(e){
            e.preventDefault();
            var it = $(this).find('a');
            var itAttr = it.attr('href');
            var itOffset = $(itAttr).offset().top;
            $('html,body').animate({scrollTop: itOffset});
        }
    //===================================================
    
        //topBtn.on('click',['a'], liScrollMove);
        /*
        topBtn.on('click',['a'],function(e){
             e.preventDefault();
            var it = $(this).find('a');
            var itAttr = it.attr('href'); //a 요소의 연결된 선택자 파악
            var itOffset = $(itAttr).offset().top; //a요소의 href값이 상단에서 떨어져있는 양 체크
            $('html,body').animate({scrollTop: itOffset}); //브라우저를 이동시켜라(스크롤 처리해라) -> itOffset으로 파악된 크기만큼 
        });// topBtn 'click' End ==================  
        */
    
        //navBtn.on('click', ['a'], liScrollMove);
        /*
        navBtn.on('click',['a'],function(e){
             e.preventDefault();
            var it = $(this).find('a');
            var itAttr = it.attr('href'); //a 요소의 연결된 선택자 파악
            var itOffset = $(itAttr).offset().top; //a요소의 href값이 상단에서 떨어져있는 양 체크
            $('html,body').animate({scrollTop: itOffset}); //브라우저를 이동시켜라(스크롤 처리해라) -> itOffset으로 파악된 크기만큼 
        });// topBtn 'click' End ==================  
        */
    
        //배열.forEach(function(배열요소 각각, 해당배열요소 순서){});
        //$each(배열,function(배열요소 순서, 순서에 맞는 배열요소 각각){});
        var btnCollection = [topBtn, navBtn];
        $.each([topBtn,navBtn],function(i,btn){
            btn.on('click',['a'],liScrollMove);
        });
    
    //===================================================
    
    //2. $('.popup_dp')의 닫기버튼 클릭시 팝업창 삭제
    var popupDp = $('.popup_dp');
    var popupBtn = popupDp.find('button');
    popupBtn.on('click',function(e){
        e.preventDefault();
        popupDp.remove();
    })
    
    //===================================================
    
    //article tab메뉴 만들어보기
    var conBox = $('#conBox_01');
    var tabLiWrap = conBox.find('.tab_li');
    var tabLi = tabLiWrap.find('li');
    var tabContentWrap = conBox.find('.tab_content');
    var tabCon = tabContentWrap.children('div');
    
    tabLi.on('click',['a'],function(e){
        e.preventDefault();
        
        var it = $(this);
        var itI = it.index();
        
        tabCon.eq(itI).show();
        tabCon.eq(itI).siblings().hide();
    });
    
    //===================================================
    
    //article tab메뉴 만들어보기
    var titleTab = $('.title_tab_style');
    var titleTabDl = titleTab.children('dl');
    var titleTabDt = titleTabDl.children('dt');
    var titleTabDd = titleTabDl.children('dd');
    
    titleTabDt.eq(0).addClass('action');
    
    titleTabDt.on('click',['a'],function(e){
        e.preventDefault();
        
        var it = $(this);
        
        it.siblings('dt').removeClass('action');
        it.addClass('action');
        
        titleTabDd.hide();
        it.next('dd').show();
    
    });
    
    
})(jQuery); //jQuery End