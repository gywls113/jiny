// jq_02_showHide.js
(function($){
    
    var timed = 1000;
    
    var box = $('.box');
    var boxPar = box.children('p');
    boxPar.css({'borderRadius':'1rem'});
    
    var part = $('.part');
    var partUl = part.children('ul');
    var showHide = partUl.children('.show_hide')
    var fade = partUl.children('.fade')
    var slide = partUl.children('.slide')
    var className = partUl.children('.class_name')
    var other = partUl.children('.other')
    
    //show_hide
    var shBtn = showHide.children('button')
    
    shBtn.stop().eq(0).on('click',function(e){
       e.preventDefault();
        boxPar.stop().show(timed);
    });
    
    shBtn.stop().eq(1).on('click',function(e){
        e.preventDefault();
        boxPar.stop().hide(timed);
    });
    
    shBtn.stop().eq(2).on('click',function(e){
    e.preventDefault();
    boxPar.stop().toggle(timed);
    });
    
    //fade
    var fadeBtn = fade.children('button');
    
    fadeBtn.eq(0).on('click',function(e){
       e.preventDefault();
       boxPar.stop().fadeIn();
    });
    
     fadeBtn.eq(1).on('click',function(e){
       e.preventDefault();
       boxPar.stop().fadeOut();
    });  
    
     fadeBtn.eq(2).on('click',function(e){
       e.preventDefault();
       boxPar.stop().fadeToggle();
    });
    
    //slide
    var slideBtn = slide.children('button');
    
    slideBtn.eq(0).on('click',function(e){
       e.preventDefault();
       boxPar.stop().slideDown();
    });
    
    slideBtn.eq(1).on('click',function(e){
       e.preventDefault();
       boxPar.stop().slideUp();
    });
    
    slideBtn.eq(2).on('click',function(e){
       e.preventDefault();
       boxPar.stop().slideToggle();
    });
    
    //class_name
    var addClassBtn = className.children('button');
    
    addClassBtn.eq(0).on('click',function(e){
       e.preventDefault();
       boxPar.addClass('view');
    });
    
    addClassBtn.eq(1).on('click',function(e){
       e.preventDefault();
       boxPar.removeClass('view');
    });
    
    addClassBtn.eq(2).on('click',function(e){
       e.preventDefault();
       boxPar.toggleClass('view');
    });
// end jQuery ========================
})(jQuery);