//jq_ex_rwdTemp.js

/*
1. 브라우저의 가로 크기값 확인하기
2. 내가 원하는 기준치로 설정된 범위(이름을 설정해서 처리)에 맞는지 파악(mobile, tablet, laptop, pc....)
3. 브라우저의 크기가 변경될 때('resize') 기존 가로값과 변경된 가로값을 비교하여, 일치하지 않을 경우에 일부 재처리
*/

var deviceSize = function(){
    
var resultDevice;    

(function($){
    //var winW = win.css({'width'}); //단점 1. 문자로 값을 가져옴 2.padding, margin, border을 사용할 경우 그 값을 빼고 가지고 온다. (그 값들도 다 변수로 정해서 더해야한다.)
    
    // 선택자.width() -> 가로값을 수치로 변경
    // .innerWidth() -> 패딩 포함한 가로값
    // .outerWidth() -> border(padding)값을 포함한 가로값
    // .outerWidth(true) -> margin(border+padding)을 포함한 가로값
    
    // 기준치를 설정
    //[480,1024,1440,1920];
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
    /*
    if(winW <= deviceType[0].size){
        myType = deviceType[0].type;    
    }else if(winW <= deviceType[1].size){
        myType = deviceType[1].type;
    }else if(wind <= deviceType[2].size){
        myType = deviceType[2].type;
    }else if(wind <= deviceType[3].size){
        myType = deviceType[3].type;
    }else{
        myType = deviceType[deviceType.length-1].type;
    }//방법 1
    */
    
    for(var i=0; i<deviceType.length; i+=1){
        if(winW <= deviceType[i].size){
            myType = deviceType[i].type;
            break;
        }else{
            myType = deviceType[deviceType.length-1].type;
        }
    } //방법2
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