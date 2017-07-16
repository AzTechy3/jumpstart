$(document).ready(function(){
	$('.carousel').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false	
	});
	
	var prev = 70;
	
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		$('.navbar').toggleClass('hidden', scrollTop > prev);
	});
	
});