(function($){
    var winSize = deviceSize();
    var deviceType = ['mobile','tablet','laptop','pc','pcfull'];
    //console.log(winSize);
    
    var headBox = $('#headBox');
    var menuBtn = $('.menu_btn');
    
    
    if(winSize === deviceType[0] || winSize === deviceType[1]){
        headBox.append('<script src="../js/src/jq_ex_rwd_menu_mobile.js"></script>');
    }else{
        menuBtn.remove();  
        //headBox.append('<script src="../js/src/jq_ex_rwd_menu_other.js"></script>')
    }
})(jQuery);