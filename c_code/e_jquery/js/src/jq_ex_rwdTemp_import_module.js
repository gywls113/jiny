// jq_ex_rwdTemp_import_module.js

(function($){
    var nowW = deviceSize();
    console.log(nowW);
    
    var deviceType = ['mobile','tablet','laptop','pc','pcfull'];
    // ===================================================
    
    var url = './rwdTest/';
    var viewBox = $('#viewBox');
    
    // ===================================================
    
    if(nowW === deviceType[0]){
        viewBox.load(url+'rwdTemp_mobile.html');  
       }else if(nowW === deviceType[1]){
        viewBox.load(url+'rwdTemp_tablet.html');
       }else{
        viewBox.load(url+'rwdTemp_pc.html');   
       }
})(jQuery);