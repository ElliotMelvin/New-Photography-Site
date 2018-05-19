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
};