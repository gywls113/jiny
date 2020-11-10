//monfee_main_module.js

//$(document).ready(function(){/*jQuery*/}); 조금 옛날방식이여서 잘 사용X
//$(function(){/*jQuery*/}); 이것도 옛날방식....

(function($){
    //jQuery
    
    var headBox = $('#headBox');
    var viewBox = $('#viewBox');
    var bestNewsBox = $('#bestNewsBox');
    var issueBox = $('#issueBox')
    
    headBox.load('./monfee/headBox.html');
    viewBox.load('./monfee/viewBox.html');
    bestNewsBox.append('<script src="../js/src/monfee_bestNewsBox.js"></script>');
    issueBox.load('./monfee/issueBox.html');
    
})(jQuery);


// jQuery에서는 선택자의 형태가 css와 매우 유사하다.
// 단, $('')를 이용하여 내부의 선택자를 작성해야한다.