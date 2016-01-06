$(window).load(function() {
	jQuery("#preloader").delay(500).fadeOut("slow");
	sliderHeight();
	topMenuAnimate();
	$('.panel-title').children('a').children('.accordion_sign').html('+');
	$('.activePanel').children('a').children('.accordion_sign').html('-');
	$('.main_slider').flexslider({
	animation: "slide",
	direction: "vertical",
	directionNav: false,
    controlNav: false,
	pauseOnHover:false,
	slideshowSpeed: 2000,
	animationSpeed: 300
	});
	var deviceDetect = $(window).width();
	var sliderContentWidth;
	if(deviceDetect<=1024 && deviceDetect>=800)
	{
		sliderContentWidth = 320;
		counter_no = 3
	}
	else if(deviceDetect<=799 && deviceDetect>=768)
	{
		sliderContentWidth =370;
		counter_no = 2
	}
	else if(deviceDetect<=767 && deviceDetect>=480)
	{
		sliderContentWidth =480;
		counter_no = 1
	}
	else
	{
		sliderContentWidth = 292;
		counter_no = 4
	}
});
jQuery(window).resize(function(){
	sliderHeight();
});
jQuery(document).resize(function(){
	sliderHeight();
});
jQuery(document).ready(function(){

		sliderHeight();
		$('img').retina();
		// theme color change function
		$('.preViewsColor a').click(function(){
			$('#themeColorChangeLink').attr({'href':'css/color/'+$(this).attr('data-folderName')+'/style.css'});
			return false;
		});

		topMenuAnimate();
		//main manu scroll and active code start
	    $('.menu_area a[href^="#"] , .team_menu[href^="#"], .single_team_mamber_close[href^="#"]').bind('click.smoothscroll',function (e) {
			e.preventDefault();
			var target = this.hash,
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top-0
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
		$('#nav').onePageNav({
				currentClass: 'active',
				changeHash: false,
				easing: 'swing',
			}
		);
		//main manu scroll and active end
	$('.panel-title').click(function(){
		$('.panel-title').removeClass('activePanel');
		$('.panel-title').children('a').children('.accordion_sign').html('+');
		$(this).children('a').children('.accordion_sign').html('-');
		$(this).addClass('activePanel');
	});
});
$(window).scroll(function(){
	topMenuAnimate();
});
function topMenuAnimate(){
		var topSliderHeight = jQuery('#home').height();
		var menuAreaHeight = $('.menu_area').height();
		if($(window).width()>=768){
			if($('body').hasClass('menuTop') && $('body').hasClass('transparentMenu') && jQuery(window).scrollTop()>=menuAreaHeight){
				$('.menu_area').addClass('topFixedMenu');
				$('.main_menu_outer').css({
					"opacity":'1'
				});
			}
			else if($('body').hasClass('menuTop') && jQuery(window).scrollTop()>=menuAreaHeight){
				$('.menu_area').addClass('topFixedMenu');
			}
			else if(jQuery(window).scrollTop()>=topSliderHeight){
				$('.menu_area').addClass('topFixedMenu');
			}
			else
			{
				$('.menu_area').removeClass('topFixedMenu');
				if($('body').hasClass('menuTop') && $('body').hasClass('transparentMenu')){
					$('.main_menu_outer').css({
					"opacity":'0'
				});
				}
			}
		}
		if(!$('body').hasClass('transparentMenu')){
			$('.main_menu_outer').css({
				"min-height":menuAreaHeight
			});
		}
		
}

function sliderHeight(){
	var sliderConHeight = $('.slider_readmore').height() + $('.main_slider').height();
	var paddingTop = parseInt(($(window).height() - sliderConHeight)/5);
	$('.header_inner').css({"height":$(window).height(),"padding-top":paddingTop})
}

// Smooth Scrolling
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Scroll and Fade
var divs = $('.fademe');
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    divs.css({ 'opacity' : (1 - st/500) });
});