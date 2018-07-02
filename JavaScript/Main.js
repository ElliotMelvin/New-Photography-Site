//Wait for page to load
window.onload = function () {

	var element = document.querySelector(".active");
	element.addEventListener("click", function (e) {
		scrollIt("#top", 800);
	});

	var element = document.querySelector(".image");
	element.addEventListener("click", function (e) {
		scrollIt("#images", 800);
	});

	var element = document.querySelector(".about");
	element.addEventListener("click", function (e) {
		scrollIt("#about", 800);
	});
	var element = document.querySelector(".videos");
	element.addEventListener("click", function (e) {
		scrollIt("#videos", 800);
	});

	var element = document.querySelector(".contact");
	element.addEventListener("click", function (e) {
		scrollIt("#contact", 800);
	});
	var element = document.querySelector(".container-arrow");
	element.addEventListener("click", function (e) {
		scrollIt("#images", 800);
	});



	// -----------------------Image Gallery
	window.sr = ScrollReveal({
		reset: false
	});

	// Custom Settings
	sr.reveal('.one', {
		duration: 600
	});

	sr.reveal('.two', {
		viewFactor: 0.5
	});

	sr.reveal('.three', {
		duration: 600
	});

	sr.reveal('.four', {
		viewFactor: 0.5
	});

	sr.reveal('.five', {
		duration: 200
	});
// About Me
	sr.reveal('.content-1', {
		duration: 600
	});

	sr.reveal('.content-2', {
		origin: 'right',
		duration: 2000
	});

	sr.reveal('.content-3', {
		viewFactor: 0.5
	});

	$('#play-pause').click(function () {
		if ($('.videoOne').get(0).paused) {
			$('.videoOne').get(0).play();
			$('#play-pause i[class*=fa-play]').removeClass('fa-play').addClass('fa-pause');
		} else {
			$('.videoOne').get(0).pause();
			$('#play-pause i[class*=fa-pause]').removeClass('fa-pause').addClass('fa-play');
		}
	});
	$('.videoOne').prop('muted', true);

	$("#mute").click(function () {
		if ($('.videoOne').prop('muted')) {
			$('.videoOne').prop('muted', false);
			$('#mute i[class*=fa-volume-off]').removeClass('fa-volume-off').addClass('fa-volume-up');
		} else {
			$('.videoOne').prop('muted', true);
			$('#mute i[class*=fa-volume-up]').removeClass('fa-volume-up').addClass('fa-volume-off');
		}

	});

	$(function () {

		// All code goes inside this jQuery function

		function videoControls() {
			// Width of the device view port
			let winWidth = $(window).width();

			// If the width of the viewport is less than 500px then:
			if (winWidth < 500) {
				// Add the controls atribute to the video tag.
				$('.videoOne').attr("", true);
				$('.videoTwo').attr("", true);
				$('.VideoThree').attr("", true);
				$('.VideoFour').attr("", true);
				$('.VideoFive').attr("", true);
			} else {
				// Otherwise remove the controls attribute
				$('.videoOne').removeAttr("");
				$('.videoTwo').removeAttr("");
				$('.VideoThree').removeAttr("");
				$('.VideoFour').removeAttr("");
				$('.VideoFive').removeAttr("");

				// Video hover play/pause
				var $video = $('.videoOne');

				$video.on('mouseenter focus', function () {
					$video.get(0).play();
				});
				$video.on('mouseout blur', function () {
					$video.get(0).pause();
				});
				// ----Video Two
				var $video2 = $('.videoTwo');

				$video2.on('mouseenter focus', function () {
					$video2.get(0).play();
				});
				$video2.on('mouseout blur', function () {
					$video2.get(0).pause();
				});
				// ----Video Three
				var $video3 = $('.VideoThree');

				$video3.on('mouseenter focus', function () {
					$video3.get(0).play();
				});
				$video3.on('mouseout blur', function () {
					$video3.get(0).pause();
				});
				// ----Video four
				var $video4 = $('.VideoFour');

				$video4.on('mouseenter focus', function () {
					$video4.get(0).play();
				});
				$video4.on('mouseout blur', function () {
					$video4.get(0).pause();
				});
				// ----Video five
				var $video5 = $('.VideoFive');

				$video5.on('mouseenter focus', function () {
					$video5.get(0).play();
				});
				$video5.on('mouseout blur', function () {
					$video5.get(0).pause();
				});
			}
		}

		// Call function on page load.
		videoControls();
		// Call function window resize.
		$(window).resize(function () {
			videoControls();
		});

	});

};
