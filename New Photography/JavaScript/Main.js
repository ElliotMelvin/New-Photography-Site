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
	
	

// -----------------------Image Gallery
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.one', { duration: 600 });

sr.reveal('.two', { 
  origin: 'right', 
  duration: 2000 
});
	
sr.reveal('.three', { duration: 600 });
	
sr.reveal('.four', { 
  viewFactor: 0.5
});

sr.reveal('.five', { 
  duration: 200 
});
	
	// -----------------------Nav Bar Scroll
	
$(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
        $('.transition').css("opacity", 0.3);
    }
    else {
        $('.transition').css("opacity", 1);
    }
});

$(document).ready(function(){
    $('.transition').live("mouseover", function () {
            $(this).css("opacity", 1);
            });

    $('.transition').live("mouseleave", function () {
        if($(window).scrollTop() > 75) { // this here
            $(this).css("opacity", 0.3);
        }
    });

});

};