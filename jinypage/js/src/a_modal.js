// a_modal.js

(function($){
  var aboutArea = $('#aboutmeBox');
  var aboutMe = aboutArea.find('.about_me');
  var experience = aboutArea.find('.experience');
  var skills = aboutArea.find('.skills');
  var aboutModal = aboutArea.find('.about_modal');
  var experienceModal = aboutArea.find('.experience_modal');
  var skillsModal = aboutArea.find('.skills_modal');
  var closeBtn = aboutArea.find('.close_btn');
  
  aboutMe.on('click',function(e){
    aboutModal.fadeIn();
  });
  
  experience.on('click',function(e){
    experienceModal.fadeIn();
  });
  
  skills.on('click',function(e){
    skillsModal.fadeIn();
  });
  
  closeBtn.on('click',function(e){
    aboutModal.fadeOut();
    experienceModal.fadeOut();
    skillsModal.fadeOut();
  });
  
})(jQuery);