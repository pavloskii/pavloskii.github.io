(function ($) {
	"use strict";

	$(document).on('click', 'a', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 51
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function () {
		$('.navbar-toggle:visible').click();
	});

	// Offset for Main Navigation
	$('#mainNav').affix({
		offset: {
			top: 100
		}
	})

	// Floating label headings for the contact form
	$(function () {
		$("body").on("input propertychange", ".floating-label-form-group", function (e) {
			$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
		}).on("focus", ".floating-label-form-group", function () {
			$(this).addClass("floating-label-form-group-with-focus");
		}).on("blur", ".floating-label-form-group", function () {
			$(this).removeClass("floating-label-form-group-with-focus");
		});
	});
	//mail regex
	// let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// function validateEmail() {
	// 	let email = $('#email').val();
	// 	if (emailRegex.test(email)) {
	// 		return;
	// 	} else {
	// 		$("#emailAlert").html(`<div class="alert alert-dismissible alert-danger">
  	// 									<button type="button" class="close" data-dismiss="alert">&times;</button>
  	// 									<strong>Alert!</strong> Email is not valid.
	// 								</div>`);
	// 		return;
	// 	}
	// }
	// $("#email").onblur(validateEmail());
})(jQuery);

