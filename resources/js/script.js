$(document).ready(function() {

	$('.hover-reveal').hover(function() {
		$('.hover-pic').addClass('hovered');
	}, function() {
		$('.hover-pic').removeClass('hovered');
	});

	$(window).scroll(function(event) {
		var scroll = $(window).scrollTop();
		if(scroll > 700) {
			$('.section-works').addClass('animate');
			$('.section').css('background', '#500');
		}

		if(scroll > 1500) {
			$('.section-bio').addClass('animate');
			$('.section').css('background', '#050');
		}

		if(scroll > 2500) {
			$('.section-contact').addClass('animate');
			$('.section').css('background', '#005');
		}

		if(scroll < 1) {
			$('.section').css('background', '#444');
		}
	});

});