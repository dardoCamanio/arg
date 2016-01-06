// JavaScript Document

var mb = jQuery.noConflict();
mb(document).ready(function($){
	
    // Categories Menu Manipulations
   /* $(".ul-side-category1 li a i").click(function() {

        var sm = $(this).parent().next();
        if (sm.hasClass("sub-category")) {
            if (sm.css("display") === "none") {
                $(this).parent().next().slideDown();
            }
            else {

                $(this).parent().next().slideUp();

                $(this).parent().next().find(".sub-category").slideUp();


             //   $(this).next().find(".categories-submenu").slideUp("normal", function() {
              //   $(this).parent().find(".icon-angle-down").removeClass("icon-angle-down").addClass("icon-angle-right");
              //   });
            }

            return false;
        }
        else {
            return true;
        }
    }); */
	
	 $(".ul-side-category li a i").click(function() {

        var sm = $(this).parent().next();
        if (sm.hasClass("sub-category")) {
            if (sm.css("display") === "none") {
                $(this).parent().next().slideDown();
				$(this).addClass('show-h');
				$(this).parent().addClass('over-h');
            }
            else {
				
                $(this).parent().next().slideUp();

                $(this).parent().next().find(".sub-category").slideUp();
				$(this).parent().parent().find(".show-h").removeClass('show-h');
				$(this).parent().parent().find(".over-h").removeClass('over-h');

             //   $(this).next().find(".categories-submenu").slideUp("normal", function() {
              //   $(this).parent().find(".icon-angle-down").removeClass("icon-angle-down").addClass("icon-angle-right");
              //   });
            }

            return false;
        }
        else {
            return true;
        }
    });
	
	
	
	
		    // Product zoom
    $('#product-zoom').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });

    var gallery = $('#gal1');
    gallery.find('a').hover(function() {

        var smallImage = $(this).attr("data-image");
        var largeImage = $(this).attr("data-zoom-image");
        var ez = $('#product-zoom').data('elevateZoom');

        ez.swaptheimage(smallImage, largeImage);
    });
	
	
	
	
	
	 $(function() {
        //Keep track of last scroll
        var lastScroll = 0;
        var header = $(".header");
        var headerfixed = $(".t2-header-mid .t2-container");
        var headerfixedbg = $(".t2-header-mid");
        var headerfixedtopbg = $(".top-header-bg");
        $(window).scroll(function() {
            //Sets the current scroll position
            var st = $(this).scrollTop();
            //Determines up-or-down scrolling
            if (st > lastScroll) {

                //Replace this with your function call for downward-scrolling
                if (st > 50) {
                    header.addClass("header-top-fixed");
                    header.find(".t2-header-top").addClass("dis-n");
                    headerfixedbg.addClass("header-bg-fixed");
                    headerfixed.addClass("header-main-fixed");
                    headerfixedtopbg.addClass("top-header-bg-fix");
                }
            }
            else {
                //Replace this with your function call for upward-scrolling
                if (st < 50) {
                    header.removeClass("header-top-fixed");
                    header.find(".t2-header-top").removeClass("dis-n");
                    headerfixed.removeClass("header-main-fixed");
                    headerfixedbg.removeClass("header-bg-fixed");
                    headerfixedtopbg.removeClass("top-header-bg-fix");
                    //headerfixed.addClass("header-main-fixed")
                }
            }
            //Updates scroll position
            lastScroll = st;
        });
    });
	
	  // Bestseller owl slider script
   /*  $("#nav-bestseller .next").click(function() {
        $("#owl-bestseller").trigger('owl.next');
    });
    $("#nav-bestseller .prev").click(function() {
        $("#owl-bestseller").trigger('owl.prev');
    });

    $("#owl-bestseller").owlCarousel({
       
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [600, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: true,
        stopOnHover: false,
        navigation: false
    });
	 */
	$("#owl-partners").owlCarousel({
        // Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [630, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: true,
        stopOnHover: false,
        navigation: false
    });
	
	
	
	
    // Summer sale owl slider script
    $("#nav-summer-sale .next").click(function() {
        $("#owl-summer-sale").trigger('owl.next');
    });
    $("#nav-summer-sale .prev").click(function() {
        $("#owl-summer-sale").trigger('owl.prev');
    });

    $("#owl-summer-sale").owlCarousel({
        // Most important owl features
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [600, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
	
	// Categories Menu Manipulations
    $(".ul-side-category-tesst li a").click(function() {

        var sm = $(this).next();
        if (sm.hasClass("sub-category")) {
            if (sm.css("display") === "none") {
                $(this).next().slideDown();
            }
            else {

                $(this).next().slideUp();

                $(this).next().find(".sub-category").slideUp();


                /*$(this).next().find(".categories-submenu").slideUp("normal", function() {
                 $(this).parent().find(".icon-angle-down").removeClass("icon-angle-down").addClass("icon-angle-right");
                 });*/
            }

            return false;
        }
        else {
            return true;
        }
    });
	
	
	
	var q = $('.quantity');

	q.each(function(){
		var $this = $(this),
			button = $this.children('span'),
			input = $this.children('input[type="text"]'),
			val = +input.val();

		button.on('click',function(e){
			e.preventDefault();
			if($(this).hasClass('minus')){
				if(val === 1) return false;
				input.val(--val);														
			}
			else{
				input.val(++val);							
			}
			if($('.product-view .quantity').length || $('.col-main > .cart .quantity').length ){
				
			}else{
				return;
			}						
			if($('#shopping-cart-table').length){
				$( '.btn-update' ).trigger( 'click' );
				return;
			}
			 if($('#product-addtocart-button' ).length){
				//$('#product-addtocart-button' ).trigger( 'click' );
				return;
			}
			
		});
	});


	  // up-sell owl slider script
    $("#nav-up-sell .next").click(function() {
        $("#owl-up-sell").trigger('owl.next');
    });
    $("#nav-up-sell .prev").click(function() {
        $("#owl-up-sell").trigger('owl.prev');
    });

    $("#owl-up-sell").owlCarousel({
        // Most important owl features
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [600, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: true,
        stopOnHover: false,
        navigation: false
    });
	
	  // relate owl slider script
    $("#nav-relate .next").click(function() {
        $("#owl-relate").trigger('owl.next');
    });
    $("#nav-relate .prev").click(function() {
        $("#owl-relate").trigger('owl.prev');
    });

    $("#owl-relate").owlCarousel({
        // Most important owl features
        items: 3, 
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [600, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: true,
        stopOnHover: false,
        navigation: false
    });
	
});



