// jq_ex_pinterest.js

(function($){
  
  /* 
  
  like_pinterest start

  todo List
  [o] 1) 카드 js에서 구현
  [x] 2) json파일 생성 후 불러오기 img list화 처리
  []  3) 생성된 ul의 가로 크기를 li 갯수만큼 담을 수 있도록 수정

  */
  
  //실제 데이터 형식에서는
  [
    {"title":"카드제목", "content":"카드내용",
    "imgSrc":''}
  ]
  
  var cardData = [];
  var k = 0,l,sampleObj={};
  var url = "../img/pinterest/"
  var imgT = 'img_';
  for(; k<30; k+=1){
    if(k<9){
      l = '0'+(k+1); //01
    }else if(k<99){
      l = k+1;    
    }
    //cardData[k] = imgT + l + '.jpg'
    cardData[k] = {};
    cardData[k].title = 'title' + l;
    cardData[k].imgSrc = url + imgT + l + '.jpg';
    cardData[k].imgAlt =imgT + l + '이미지설명';
  }
    //console.log(cardData);
  
  
  var win = $(window);
  
  var cardBox = $('#cardBox');
  cardBox.append('<ul></ul>'); // 이때 ('ul');이 아닌 태그로써 씀
  var cardUl = cardBox.children('ul');
  var liText = '<li><a><div class="img_temp"><img></div><span></span></a></li>'
  var y = 0;
  var listEl;
  for(;y<20;++y){
    // s++ / +=1 / ++1 모두 같음
    
    cardUl.append(liText);
    listEl = cardUl.children('li').eq(y);
    listEl.find('img').attr({'src':cardData[y].imgSrc,
                             'alt':cardData[y].imgAlt});
    listEl.find('span').text(cardData[y].title);
    listEl.find('a').attr({"href":'#'});
  };//for 20개의 li tags
  
  var cardLi = cardUl.children('li');
  
  /* 
  *** 책장과도 같다고 생각해보자 나는 책이 많은 상태고 책장을 사려고함
  
  ul의 크기설정
  1. li의 가로크기, li의 마진값 (공백)
  2. 브라우저에서의 기준 크기
  
  */
  
  var cardLiWidth = cardLi.eq(0).outerWidth();
  var cardMargin = cardLi.eq(0).outerWidth(true) - cardLiWidth;
  // outerWidth(true) -> 마진값을 포함한 가로값
  // outerWidth()- > 마진값을 제외한 가로값 (padding+border+width)
  
  /* 여기서부터 브라우저 크기가 변경되면 다시 수행! - 함수처리*** */
  
  var BrowerSet = function(){
  
    cardLi.removeAttr('style'); // 함수가 재수행하면 li의 style속성을 제거
    
    var winW = win.outerWidth();
    var liLen = parseInt(winW / (cardLiWidth + cardMargin));
    // 정수화처리 : parseInt() - 강제로 정수로 바꿔라(소숫점날림)
    // 버림, 올림, 반올림 : Math.floor(), Math.ceil(), Math.round()
    //console.log(liLen);
    var ulWidth = ((cardLiWidth + cardMargin) * liLen) - cardMargin;
    cardUl.css({width: ulWidth + 'px'});
    
    cardLi.eq(liLen-1).css({margin:0});
    //console.log(liLen,ulWidth);
    
    // li설정
    // 1. li의 순번에서 가로 행에 들어가는 마지막번쨰에는 margin 제거
    // 2. 각각의 행에 들어가는 모든 마지막위치의 갯수번째 margin 제거 
    
    var lin = 0;
    var liNth = Math.ceil(cardLi.length / liLen);
    var n;
    for(; lin<liNth; lin += 1){
      n = (liLen * lin) -1 ;
      //console.log(n);
      cardLi.eq(n).css({marginRight:0});
    }
    
    //가로에 4개씩에서 4번째 (eq(4*n-1))마다 마진값이 없어야 한다 -> 3,7,11,15
    //만약 가로에 6개씩에서 6번째 (eq(6*n-1))마다 마진값이 없어야 한다 -> 5,11,17,23
    
    //브라우저 크기가 변경될때마다 재측정
  }; //BrowerSet();
  BrowerSet();
  
  win.on('resize',function(){
    BrowerSet();
  });
  
})(jQuery);




