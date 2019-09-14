//
    
// Template Name: Potato - Personal Portfolio Template
// Version: 1.0
// Author: Themetrading
// Email: themetrading@gmail.com
// Developed By: Themetrading
// First Release: 20 August, 2019
// Author URL: www.themetrading.com

//----------------------------------------------
// Cache jQuery Selector
// Navbar scrolling
// Fact Counter For Achivement Counting
// When document is Scrollig, do
// LightBox / Fancybox
// Testimonial
// Scroll Top
// Elements Animation
// Gallery With Filters List
//----------------------------------------------

(function ($) {
    "use strict";
	
	// Cache jQuery Selector
	//------------------------
	var $body = $("body"),
		$window   = $(window),	
		$testimonial = $('.feedback')

	 $body.scrollspy({
	    target: ".navbar-collapse",
	    offset: 20

	  });

	// Navbar scrolling
	//-------------------------------------
    $window.on("scroll",function () {

      var bodyScroll = $window.scrollTop(),
        navbar = $(".main-nav"),
        logo = $(".main-nav .navbar-brand> img");

      if(bodyScroll > 100){

        navbar.addClass("nav-scroll");

      }else{

        navbar.removeClass("nav-scroll");
      }
    });


	// Fact Counter For Achivement Counting
	//----------------------------------------
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .count.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-num").attr("data-stop"),
					r = parseInt($t.find(".count-num").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-num").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-num").text(this.countNum);
						}
					});
				}	
			});
		}
	}
	
	// When document is Scrollig, do	
	//---------------------------------
	$window.on('scroll', function() {
		factCounter();
	});

	// LightBox / Fancybox
	//--------------------------------
	$('[data-fancybox="gallery"]').fancybox({
		 animationEffect: "zoom-in-out",
		 transitionEffect: "slide",
		 transitionEffect: "slide",
	});

	// Testimonial
	//---------------------------------
		// 19. Testimonial Slide Unigreen
	if ($testimonial.length) {
		$testimonial.owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			dots: false,
			autoplayHoverPause:true,
			autoplay: true,
			smartSpeed: 400,
			navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:1
				},
				1024:{
					items:1
				},
				1100:{
					items:1
				}
			}
		});    		
	}

	// Scroll Top
	//----------------------------------
	$(window).scroll(function(){ 
	  if ($(this).scrollTop() > 500) { 
	    $('#scroll').fadeIn(); 
	  } else { 
	    $('#scroll').fadeOut(); 
	  } 
	}); 
	$('#scroll').click(function(){ 
	  $("html, body").animate({ scrollTop: 0 }, 1000); 
	  return false; 
	});

	
	// Elements Animation
	//-----------------------
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	// Gallery With Filters List
	//---------------------------------
		var containerEl = document.querySelector('.image-gallery');

        var mixer = mixitup(containerEl);

})(jQuery);