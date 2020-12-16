(function($){
    var nowW = deviceSize();
    console.log(nowW);
    var deviceType = ['mobile','tablet','laptop','pc', 'pcfull'];
    
    var body = $('body');
    var wrap = $('#wrap');
    var headBox = $('#headBox');
    var localNavBox = $('#localNavBox');
    var viewBox = $('#viewBox');
    var promotionBox = $('#promotionBox');
    var lunaBox = $('#lunaBox');
    var attractionBox = $('#attractionBox');
    var informationBox = $('#informationBox');
    var footBox = $('#footBox');
    
    var url = '../js/src/seoulland_main/';  
  

    headBox.load('./seoulland_main/headBox.html',function(){
        if(nowW === deviceType[1]){
            headBox.append('<script src="../js/src/seoulland_main/headBox_sns.js"></script>');
        }else if(nowW === deviceType[0]){
         headBox.append('<script src="../js/src/seoulland_main/headBox_sns.js"></script>');
                }
    });
  
    localNavBox.load('./seoulland_main/localNavBox.html',function(){
       if(nowW === deviceType[3]){ 
          localNavBox.append('<script src="../js/src/seoulland_main/localNav_scroll_css.js"></script>');
          localNavBox.append('<script src="../js/src/seoulland_main/localNav_question.js"></script>');
       }else if(nowW === deviceType[2]){
         localNavBox.append('<script src="../js/src/seoulland_main/localNav_question.js"></script>');
       }else if(nowW === deviceType[4]){
         localNavBox.append('<script src="../js/src/seoulland_main/localNav_question.js"></script>');
         localNavBox.append('<script src="../js/src/seoulland_main/localNav_scroll_css.js"></script>');
       }
       });
    viewBox.load('./seoulland_main/viewBox.html', function(){
      setTimeout(function(){
          if(nowW === deviceType[3]){ 
          viewBox.append('<script src="../js/src/seoulland_main/viewBox_indicator_remove.js"></script>');
       }
      },100); 
     });
    promotionBox.load('./seoulland_main/promotionBox.html', function(){
       if(nowW === deviceType[0]){ 
          promotionBox.append('<script src="../js/src/seoulland_main/promotionBox_slide.js"></script>');
       }
     });
    lunaBox.load('./seoulland_main/lunaBox.html', function(){
       if(nowW === deviceType[3]){ 
         lunaBox.append('<script src="'+url+'lunaBox_slide.js"></script>');
       }else if(nowW === deviceType[2]){
         lunaBox.append('<script src="'+url+'lunaBox_slide.js"></script>');
       }else if(nowW === deviceType[1]){
        lunaBox.append('<script src="'+url+'lunaBox_slide.js"></script>');
       }else if(nowW === deviceType[4]){
        lunaBox.append('<script src="'+url+'lunaBox_slide.js"></script>');
       }
    });
    attractionBox.load('./seoulland_main/attractionBox.html');
    informationBox.load('./seoulland_main/informationBox.html');
    footBox.load('./seoulland_main/footBox.html', function(){
      setTimeout(function(){
        if(nowW === deviceType[4]){ 
        body.append('<script src="../js/src/seoulland_main/main_1920_scroll.js"></script>');
        }
      }, 100);
    });
    
    
    
    
  
//  if(nowW === deviceType[3]){ 
//        viewBox.append('<script src="../js/src/seoulland_main/viewBox_indicator_remove.js"></script>');
//        localNavBox.load(url+'localNav_question.js');
//        localNavBox.load(url+'localNav_scroll_css.js');
//        lunaBox.load(url+'lunaBox_slide.js');
//       }else if(nowW === deviceType[2]){
//        localNavBox.load(url+'localNav_question.js');
//        lunaBox.load(url+'lunaBox_slide.js');
//       }else if(nowW === deviceType[1]){
//        lunaBox.load(url+'lunaBox_slide.js');
//       }
  
})(jQuery);