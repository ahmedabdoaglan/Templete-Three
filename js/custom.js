/*global $, alert, console*/
$(function () {
	'use strict';
	// trigger nice scroll plugin //
	$('html').niceScroll({
		cursorcolor: ' #f7600e',
		cursorwidth: '10px',
		cursorborderradius: '0',
		cursorborder: '1px solid #f7600e'
	});
	// change header height //
	$('.header').height($(window).height());
	//scroll to features//
	$('.header .arrow i').click(function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1000);
	});
	$('.hire').click(function () {
		$('html, body').animate({
			scrollTop: $('.our-team').offset().top
		}, 1000);
	});
 //show hidden items from work
	$('.show-more').click(function () {
		$('.our-work .hidden').slideDown(1000);
	});
});
//check Testmonials
var leftArrow = $('.testim .fa-chevron-left'),
	rightArrow = $('.testim .fa-chevron-right');
function checkClient() {
	'use strict';
	if ($('.client:first').hasClass('active')) {
		leftArrow.fadeOut();
	} else {
		leftArrow.fadeIn();
	}
	if ($('.client:last').hasClass('active')) {
		rightArrow.fadeOut();
	} else {
		rightArrow.fadeIn();
	}
	
}
checkClient();
$('.testim i').click(function () {
	'use strict';
	if ($(this).hasClass('fa-chevron-right')) {
		$('.testim .active').fadeOut(100, function () {
			$(this).removeClass('active').next('.client').addClass('active').fadeIn();
			checkClient();
		});
	} else {
		$('.testim .active').fadeOut(100, function () {
			$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
			checkClient();
		});
	}
});