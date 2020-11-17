//jq_ex_fancybox_plugin.js

(function($){
     var data = [
        {"title":"juice_01",
        "thumImg":"juice_small_01.jpg",
         "bigImg":"juice_big_01.jpg",
         "content":"imgage_01설명 Lorem"
        },
        {"title":"juice_02",
        "thumImg":"juice_small_02.jpg",
         "bigImg":"juice_big_02.jpg",
         "content":"imgage_02설명 Lorem "
        },
        {"title":"juice_03",
        "thumImg":"juice_small_03.jpg",
         "bigImg":"juice_big_03.jpg",
         "content":"imgage_03설명 Lorem "
        },
        {"title":"juice_04",
        "thumImg":"juice_small_04.jpg",
         "bigImg":"juice_big_04.jpg",
         "content":"imgage_04설명 Lorem "
        },
     ];
    //-----------------------------------------------
    
    var modalInCode = '<li><button type="button"><span></span></button></li>';
    var galleryCode = '<div class="gallery_box"><div class="gallery_area"><div class="close"><button type="button"><span></span></button></div><div class="big_img"><p></p></div></div></div>';
    
    // ----------------------------------------------
    var modal01 = $('.modal_01');

    var modalUl = modal01.children('ul');


    var dataLen = data.length;
    
    var i = 0;
    modalUl.empty(); // 선택자 내부를 지우기
    var modalBtn;
    var temLi;
    var url = '../../img/modal/'
    
    for (;   i<dataLen; i+=1){
        modalUl.append(modalInCode);
        
        temLi = modalUl.children('li').eq(-1);
        modalBtn = modalUl.children().eq(-1).find('button');
        modalBtn.css({backgroundImage:'url('+ url + data[i].thumImg +')',textTransform:'uppercase'});
        modalBtn.children('span').text(data[i].title);
        
        temLi.attr({'data-big':data[i].bigImg,'data-narr':data[i].content});
        
    }
    
    var modalLi = modalUl.children('li');
    modalBtn = modalLi.find('button');
    var box, colseBtn, galleryArea, bigImage, pTag;
    
    var indexCheck;
    
    var timed = 500;
    console.log(indexCheck)
    modalLi.children('button').on('click',function(e){
        e.preventDefault();
        var it = $(this).parent('li');
        var itI = it.index();
        indexCheck = itI;
        
        // modal01.append(galleryCode); //선택자 내부의 뒤에
        modal01.after(galleryCode); //선택자 바로 뒤에
    
        box = $('.gallery_box');
        closeBtn = box.find('.close');
        galleryArea = box.find('.gallery_area');
        bigImage = galleryArea.find('.big_img');
        pTag = bigImage.children('p');        
        
        //var thisBig = $(this).parent('li').attr('data-big');
        //var dataNarr = $(this).parent('li').attr('data-narr');
        
        //pTag.text(dataNarr);  
        //bigImage.css({'backgroundImage':'url('+ url + thisBig+ ')'});
       
        bigImage.css({'backgroundImage':'url('+ url + data[indexCheck].bigImg+ ')'});
        pTag.text(data[indexCheck].content);
                      
        box.stop().fadeIn(function(){
            closeBtn.children('button').focus();
            setTimeout(function(){
                pTag.addClass('action');
            },timed);
        });
        
    
    
    closeBtn.on('click',function(e){
        e.preventDefault();
        
        box.stop().fadeOut();
        modalLi.eq(indexCheck).find('button').focus();
        pTag.removeClass('action');
        box.remove();
        });
    });
})(jQuery);

