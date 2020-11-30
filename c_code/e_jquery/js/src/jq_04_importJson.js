// jq_04_importJson.js

(function(e){
    console.log($.fn)
    /* 비동기처리 */
    $.ajax({
        url: '../data/make_json.json',
        dataType: 'json',
        context: document.body
    }).done(function(data){
        //console.log(data);
        
        var wrap = $('#wrap');
        wrap.append('<ul class="list_inset"></ul>');
        var Insert = wrap.children('ul');
        
        var i = 0;
        for(; i<data.length; i+=1){
            Insert.append('<li></li>');
            Insert.children('li').eq(-1).text(data[i].name);
        }
    });
    
    // ----------------------------------
    
    /*
    $.ajax({url:'불러올 파일 주소'}).done(function(data){});
    */
})(jQuery);