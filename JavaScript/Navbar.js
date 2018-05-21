//Wait for page to load
window.onload = function(){
	
  var element = document.querySelector(".active");
  element.addEventListener("click", function(e){
    scrollIt("#top",800);
  });

var element = document.querySelector(".image");
element.addEventListener("click", function(e){
  scrollIt("#images",800);
});

var element = document.querySelector(".about");
element.addEventListener("click", function(e){
  scrollIt("#about",800);
});

var element = document.querySelector(".contact");
element.addEventListener("click", function(e){
  scrollIt("#contact",800);
});
var element = document.querySelector(".container-arrow");
element.addEventListener("click", function(e){
  scrollIt("#images",800);
});
	$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
	$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
 	};   	
});

$('').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
};