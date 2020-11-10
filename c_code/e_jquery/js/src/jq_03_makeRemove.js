//jq_03_makeRemove.js

(function($){
    var part = $('.part');
    var p = part.children('p');
    p.css({'border':'0.065rem solid #7a0'});
    
    // 선택자.method();
    var text = part.find('.text');
    text.text('원하는 글자를 <br />입력할 수 있습니다.');
    // 원래 있던 글자를 날려버리고 그 안에 글자를 넣는다.
    // <br />(코드)을 글자로 인지해서 먹지않는다.
    
    var html = part.find('.html');
    html.html('원하는 요소를 <br />삽입할 수 있습니다.')
    // 원래 있던 요소를 날려버리고 그 안에 글자를 넣는다.
    // <br /> 코드를 인지할 수 있다.
    
    var wrap = part.find('.wrap');
    wrap.wrap('<div></div>');
    // 해당 부분을 태그로 감쌀 수 있다.
    wrap.unwrap();
    // 해당 부분의 부모태그를 지울 수 있다.
    // 부모가 여러개있을 경우에는 unwrap을 여러번 써야한다.
    // wrap.unwrap().unwrap().unwrap();
    
    var prepend = part.find('.prepend');
    prepend.prepend('<span>삽입되었는지 확인</span>');
    // 해당 태그 내부의 앞에 다른 태그를 삽입할 수 있다.
    //var span = $('span');
    //prepend.prepend(span);
    // 요소의 형태로 사용하지 않으면, 다른곳의 요소를 강제로 뜯어서 가져올 수 있다.
    var mySpan = $('.preto');
    mySpan.prependTo(prepend); 
    // .preto를 p요소 내부앞에 삽입
    /*
    1. 선택자A.prepend(선택자B);
    2. 선택자B.prepend(선택자D);
    
    1. 경우는 A내부에 B를 담는것 (이런거 할 수 있어?)
    2. 경우는 D의 내부에 C를 담는것 (할 수 있어 이런거?)
    */
    
    var append = part.find('.append');
    append.append('<span>삽입되었는지 확인</span>');
    mySpan.appendTo(append);
    //위에있던걸 뜯어옴 (ctrl+x)개념
    
    var context = part.find('.context');
    //p요소 내부에 들어있는 모든 내용을 가져오는 기능
    var contextCon = context.contents();
    //console.log(contextCon);
    context.html('<a href="#"></a>');
    context.children('a').html(contextCon);
    //html메소드는 기존 내용을 삭제하고 새로 작성한 내용을 삽입함
    
    var contextHtml = context.html();
    //console.log(contextHtml);
    context.html('<a href="#">' + contextHtml + '</a>');
    
    
    var before = part.find('.before');
    before.before('<div>.before앞에 요소를 생성</div>');
    
    var after = part.find('.after');
    after.after('<div>.after뒤에 요소를 생성</div>');
    
    div = part.find('div');
    console.log(div);
    
    //attribute -> 속성을 처리하는 기능
    var afterAttr = after.attr('title').split(' ');
    console.log(afterAttr);
    after.attr({'data-x':'what is data'});
    after.removeAttr('style');
    
    
    var arr = ['style','class','title','data-x'];
    
    //javascript 
    //arr.forEach(function(d){
    //    after.removeAttr(d);
    //});
    
    //jQuery
    $.each(arr,function(i, d){
        after.removeAttr(d);
    })
    
// End JQuery
})(jQuery);