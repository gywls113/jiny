(function($){

    var headBox = $('#headBox');
    var localNavBox = $('#localNavBox');
    var viewBox = $('#viewBox');
    var promotionBox = $('#promotionBox');
    var lunaBox = $('#lunaBox');
    var attractionBox = $('#attractionBox');
    var informationBox = $('#informationBox');
    var footBox = $('#footBox');
    
    headBox.load('./seoulland_main/headBox.html');
    localNavBox.load('./seoulland_main/localNavBox.html');
    viewBox.load('./seoulland_main/viewBox.html');
    promotionBox.load('./seoulland_main/promotionBox.html');
    lunaBox.load('./seoulland_main/lunaBox.html');
    attractionBox.load('./seoulland_main/attractionBox.html');
    informationBox.load('./seoulland_main/informationBox.html');
    footBox.load('./seoulland_main/footBox.html');
    
    /*
    setTimeout(function(){
        $('body').append('<script src="../js/src/seoulland_main/footBox_familysite.js"></script>');
    }, 100);
    */
})(jQuery);