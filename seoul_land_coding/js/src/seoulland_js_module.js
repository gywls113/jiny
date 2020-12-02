//seoulland_js_module.js


var deviceSize = function(){
    
var resultDevice;    

(function($){

    var deviceType = [
        {type:'mobile', size:480},
        {type:'tablet', size:1024},
        {type:'laptop', size:1440},
        {type:'pc', size:1920},
        {type:'pcfull'}
    ];
    
    //브라우저 최초 크기값 확인
    var win = $(window); //javascript의 window
    var beforeWinW = win.outerWidth(true); // 사이즈가 변경되기 전의 가로값
    var deviceCheck = function(winW){

    //type체크
    var myType
  
    for(var i=0; i<deviceType.length; i+=1){
        if(winW <= deviceType[i].size){
            myType = deviceType[i].type;
            break;
        }else{
            myType = deviceType[deviceType.length-1].type;
        }
    } 
    //console.log(myType);
    return myType;
   //deviceCheck
   }
    
    var winSize = deviceCheck(beforeWinW);
    resultDevice = winSize;
    
    // ======================================
    
    win.on('resize',function(){
        //사이즈 변경시 브라우저 크기값 재 확인
        var reWinW = win.outerWidth(true);
        var afterWinSize = deviceCheck(reWinW);
        
        //기존 디바이스 타입과 변경된 디바이스 타입이 다른경우 새로고침
        if(winSize !== afterWinSize){
            location.reload();
        };
    });
    return resultDevice;
})(jQuery);
return resultDevice;    
};