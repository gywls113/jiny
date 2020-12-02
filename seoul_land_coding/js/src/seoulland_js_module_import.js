// seoulland_js_module_import.js


(function($){
    var nowW = deviceSize();
    console.log(nowW);
    
    var deviceType = ['mobile','tablet','laptop','pc'];
    // ===================================================
    
    var url = '../js/src/seoulland_main/';
    var wrap = $('#wrap');
    var headBox = $('#headBox');
    var viewBox = $('#viewBox');
    var localNavBox = $('#localNavBox');
    var promotionBox = $('#promotionBox');
    var lunaBox = $('#lunaBox');
    var attractionBox = $('#attractionBox');
    var informationBox = $('#informationBox');
    var footBox = $('#footBox');
    
    // ===================================================
    
    if(nowW === deviceType[3]){ 
//        viewBox.append('<script src="../js/src/seoulland_main/viewBox_indicator_remove.js"></script>');
//        viewBox.load(url+'viewBox_indicator_remove.js');
//        localNavBox.load(url+'localNav_question.js');
//        localNavBox.load(url+'localNav_scroll_css.js');
//        lunaBox.load(url+'lunaBox_slide.js');
//       }else if(nowW === deviceType[2]){
//        localNavBox.load(url+'localNav_question.js');
//        lunaBox.load(url+'lunaBox_slide.js');
//       }else if(nowW === deviceType[1]){
//        lunaBox.load(url+'lunaBox_slide.js');
       }
})(jQuery);