$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 360) { 
          $('#back-to-top').fadeIn(); 
      } else { 
          $('#back-to-top').fadeOut(); 
      } 
  }); 
  $('#back-to-top').on('click', function(e){
    $("html, body").animate({scrollTop: $("#nav").offset().top}, 500);
  });
});