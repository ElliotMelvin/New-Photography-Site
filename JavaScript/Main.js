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
	var element = document.querySelector(".videos");
element.addEventListener("click", function(e){
  scrollIt("#videos",800);
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
window.sr = ScrollReveal({ reset: false });

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
	sr.reveal('.textOne', { duration: 600 });
	
	sr.reveal('.textThree', { 
  origin: 'right', 
  duration: 2000 
});
	
	sr.reveal('.textTwo', { 
  viewFactor: 0.5
});
// -----------------------Video Hover
	// ----Video One
	var $video = $('.videoO');
	
	$video.on('mouseenter focus', function () {
		$video.get(0).play();
	});
	$video.on('mouseout blur', function (){
		$video.get(0).pause();
	});
	// ----Video Two
	var $video2 = $('.videoT');
	
	$video2.on('mouseenter focus', function () {
		$video2.get(0).play();
	});
	$video2.on('mouseout blur', function (){
		$video2.get(0).pause();
	});
	// ----Video Three
	var $video3 = $('.videoTh');
	
	$video3.on('mouseenter focus', function () {
		$video3.get(0).play();
	});
	$video3.on('mouseout blur', function (){
		$video3.get(0).pause();
	});
};