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

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});