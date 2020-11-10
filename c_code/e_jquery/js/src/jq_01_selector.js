// jq_01_selector.js

//jQuery기본작성 1번방법 - 요새는 잘 사용하지 않는다.
//$(document).ready(function(){});
//$(function(){});

//jQuery기본작성 2번 방법 - 이 방법으로 쓰는걸 더 추천
(function($){
    //$('#box').css({'width':'100' + 'px','height': 100 + 'px','backgroundColor':'#fa0'})
    var box = $('#box');
    box.css({'width':100 + 'px',
             'height': 100 + 'px',
             'backgroundColor':'#fa0'});
    
    var boxTwo = $('.box_two');
    //css를 나열해서 사용할 수도 있다.
    //boxTwo.css('width':100 + 'px');
    //boxTwo.css('height':50 + 'px');
    //boxTwo.css('border':'3px solid #0cf');
    boxTwo.css({'width':100 + 'px',
                'height':50 + 'px',
                'border':'3px solid #0cf'});
    
    var listThree = $('.list_three');
    var listLi = listThree.children('li');
    listLi.css({'backgroundColor':'#fac',
                'marginBottom':'5px',
                'width':200 + 'px'});
    
    listThree.children('li:nth-child(1)').css({'color':'#03f',
                                              'fontWeight':'bold'});
    listThree.children('li:nth-of-type(2)').css({'color':'#f30',
                                                 'fontWeight':'bold'});
    // nth만 사용하면 +1순서에 적용된다.
    listThree.children('li:nth(2)').css({'color':'#330',
                                         'fontSize':1.3 + 'rem'});
    // nth를 사용할 때는 eq(0,1,2,3이여서 3이 4번째)를 제일 많이 사용한다.
    listThree.children('li').eq(3).css({'color':'#fff',
                                       'fontSize':1.3 + 'rem'});
    
    var listOl = listThree.find('ol'); // .list_three ol
    listOl.css({'border':'5px solid #777', 'padding':'10px'});
    // ol::maker, ol::before, ol::after
    var style = $('style');
    style.append('#wrap{width:800px; background-color:#ddd; margin:auto}');
    style.append('#wrap::after{content:"글씨를 작성해 보아요!";}');
    
    //=====================================================
    
    var p2List = $('.part_2_list');
    var p2Li = p2List.children('li');
    p2List.css ({'listStyle':'none'});
    p2Li.css({'width':'100px', 'height':'20px', 'marginBottom':'5px', 'backgroundColor':'#fff'});
    p2Li.eq(4).css({'color':'#07f', 'fontWeight':'bold'});
    p2Li.eq(4).prev().css({'textAlign':'right'});
    p2Li.eq(4).prevAll().css({'borderRadius':'20px','boxShadow':'5px 5px 5px #555'});
    
    p2Li.eq(-5).css({'fontWeight':'bold','color':'#f07'});
    p2Li.eq(-5).next().css({'backgroundColor':'#ff7'});
    p2Li.eq(-5).next().nextAll().css({'boxShadow':'5px 5px 0 #f07 inset'});
    
    //부모
    p2Li.eq(10).parents('#wrap').css({'border':'3px dotted #57a'});
    //부모격으로 해당하는걸 모두 선택할때는 복수형으로 작성
    //그중에 하나만 선택할때는 ()안에 선택할걸 넣기
    p2Li.eq(10).parentsUntil('#wrap').css({'outline':'5px solid rgba(51,51,255,0.3)'});
    p2Li.eq(10).parent().css({'border':'1px dotted #171717'});
    
    p2Li.parent().parent().siblings('h1').css({'backgroundColor':'#cfc',
                                  'padding':'10px',
                                  'maring-bottom':'10px'});
    
    //=====================================================
    var evt = $('.evt');
    var evtLi = evt.children('li');
    
    evtLi.eq(0).on('click',function(e){
        e.preventDefault();
        evtLi.css({'backgroundColor':'#aa7'})
    });
    evtLi.eq(1).on('mouseenter',function(e){
        e.preventDefault();
        evtLi.css({'backgroundColor':'transparent'})
    });
    
    evtLi.on('click',function(e){
        e.preventDefault();
        //선택한 그것.을 제외한 나머지 li에 border-bottom을 적용
        //console.log(e);
        
        $(this).css({'border':'0'});
        $(this).siblings().css({'borderBottom':'5px solid #333'});
        
        var thisI = $(this).index();
        console.log(thisI);
        // eq - 순서를 직접 언급
        // index - 순서를 확인(클릭한걸 몇번째에 있는지 확인)
    })
    
    /*
    click, dblclick, mousedown, mouseup, mousemove
    mouseenter, mouseleave, mouseover, mouseout
    keypress, keydown, keyup
    focus, blur
    touchstart, touched, touchmove
    scroll, resize
    */
    
})(jQuery);