// localNav_question.js

(function($){
    
    var questionArea = $('.qusetion_area');
    var questionDl = questionArea.find('.question_box');
    var questionDt = questionDl.children('dt');
    var questionDd = questionDl.children('dd');
    var closeBtn = questionDd.find('.question_close');
    
    var questionStatus = questionDd.css('display');
    
    questionDt.on('click',['a'],function(e){
        e.preventDefault();
        
        if(questionStatus === 'none'){
            questionDd.stop().fadeIn();
          closeBtn.find('button').focus();
        };
    
    });

    closeBtn.on('click',['button'],function(e){
        e.preventDefault();
        
        questionDd.stop().fadeOut();

    
    });
   

})(jQuery);