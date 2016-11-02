$(function(){
	$('#slide').slidesjs({
		heigth: 235,
		navigation: false,
		pagination: false,
		effect:{
			fade:{
				speed: 400
			}
		}, callback:{
			start: function(number){
				$('#slider_content1, #slider_content2, #slider_content3').fadeOut(500);
			},
			component: function(number){
				$('#slider_content' + number).delay(500).fadeIn(1000);
			}
		}, play:{
			active: false,
			auto: true,
			interval: 6000,
			pauseOnHover: false
		}
	});
});

$('#alternative_menu').change(function(){
	$selected = $('#alternative_menu option:selected');
	window.location.href = "http://www.lingulo.com/" + $selected.val();
});

(function($window, document, undefined){
	'use strict';
	$(function(){
		$('#mobileMenu').hide();
		$('.toggleMobile').click(function(){
			$(this).toggleClass('active');
			$('#mobileMenu').slideToggle(5000);
		});
	});
	$(window).on('resize', function(){
		if($(this).width()>500){
			$('#mobileMenu').hide();
			$('.toggleMobile').removeClass('active');
		}
	});
})(jQuery, window, document);