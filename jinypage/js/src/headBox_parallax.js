// headBox_parallaxb.js

(function($){
  $('html,body').animate({scrollTop:0})
  var win = $(window);
  var winH = win.outerHeight();

  var headBox = $('#headBox');
  var h1 = headBox.find('h1');
  var webDArea = headBox.find('.webdesign_area');
  var frontImg = headBox.find('.front_image');
  var backImg = headBox.find('.back_image');
  var scrollLine = headBox.find('.scroll_line');
  var blink = $('.blink_area');
  var scrollLine = blink.children('.scroll_line');
  var scaleN = 1.7;


  win.on('scroll',function(e){
    
    var winSt = $(this).scrollTop();
    var per = winSt/winH;
    var scaleR = 1+per;
    var opacityR;
    //console.log(scaleR);
    opacityR = scaleN + 1 - per;
    
    // webdesign_area 나타나기
    var h1_Op = h1.css({opacity:0});
    var h1_op_offset = h1_Op.offset().top;
    //console.log(h1_op_offset);
    
//    if(h1_op_offset>2900){
//      webDArea.css({opacity:opacityR});
//    }else if(h1_op_offset<2900){
//      webDArea.stop().hide();
//    }
    
    // logo사라지기 
    var logoR = 0; 
    var logoPer;
//    console.log(per)
    h1.css({opacity:2 - per});
    var h1Opacity = parseFloat(h1.css('opacity')); 
    
    if(h1Opacity <= 0 && h1Opacity > -1){
      webDArea.css({opacity:-(2 - per)});
    }else if(h1Opacity <= -1){
      webDArea.css({opacity:2 - per});
    }else{
      webDArea.css({opacity:0});
    }
    //console.log(h1Opacity);
//    if(per>=logoR){
//      logoPer = 1 + (logoR-per);
////      console.log(logoPer);
//    }
    
    
    // fron_img 커졌다가 사라지게 하기
    if(scaleR <= scaleN){
      //console.log('scale:',scaleR);
      frontImg.css({transform:'scale(' + scaleR + ')'});
    }else if(scaleR >= scaleN + 1){
      //console.log('opacity:',opacityR);
      frontImg.css({opacity: opacityR});
    };
      
    // black opacity 주기
    var op =  scaleR - scaleN ;    
    if(scaleR>scaleN){        
      backImg.css({backgroundColor:'rgba(0,0,0,'+ op +')'});
    };
    
    if(op >= 2.3){
      headBox.fadeOut();
    }else{
      headBox.fadeIn();
    }
    
    
  }); // win.scroll

  
})(jQuery);







