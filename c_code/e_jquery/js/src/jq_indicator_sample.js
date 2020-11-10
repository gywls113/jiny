// jq_indicator_sample.js

(function($){    
    var miniProduct = $('#miniProduct');
    var backImg = miniProduct.find('.product');
    var backUl = backImg.find('ul');
    var backLi = backImg.find('li');
        
    var indicator = miniProduct.find('.indicator');
    var indLi = indicator.find('li');
    var slideN = 0;
    
    //indicator 버튼 
    indLi.on('click',function(e){
    e.preventDefault();
    
    var thisI = $(this);
    slideN = thisI.index();
    backUl.stop().animate({'left': slideN * -100 +'%'});
    indLi.eq(slideN).addClass('action');
    indLi.eq(slideN).siblings().removeClass('action');
    });
})(jQuery);