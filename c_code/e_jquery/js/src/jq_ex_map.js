// jq_ex_map.js

// 카카오 개발자 페이지 들어가서 코드 복사하기

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

//37.264207825193964, 127.03055782585137
var setMap  = function(lat,lng){
                    
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(lat,lng), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(lat,lng); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

};

setMap(37.264207825193964, 127.03055782585137);

(function($){
  var store = $('.store');
  var storeLi = store.find('li');
  
  storeLi.on('click',function(e){
    e.preventDefault();
    $('#map').empty(); //소스코드 중복 겹침 방지
    var liLink = $(this).children('a');
    var liLat = parseFloat(liLink.attr('data-x'));
    var liLng = parseFloat(liLink.attr('data-y'));
    // parseInt() -> 숫자 정수로 변환
    // parseFloat() -> 숫자 소수점까지 변환
    setMap(liLat,liLng);
    
    $(this).addClass('action');
    $(this).siblings().removeClass('action');
  });
})(jQuery);