jQuery(document).ready(function($) {
	
	var primary_color = 'e94d4e';
	var second_color = '18425a';
	//Function to convert rgb format to a hex color
	function rgb2hex(rgb){
	 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	 return (rgb && rgb.length === 4) ? "#" +
	  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
	}
	
	$('.color-palate .palate').click(function(){

	var thiscolor = $(this).css('background-color');
	var thatcolor = $(this).css('color');
	
	primary_color = rgb2hex(thiscolor);
	primary_color = primary_color.replace("#", "");
	
	second_color = rgb2hex(thatcolor);
	second_color = second_color.replace("#", "");
	
    var linkcss = 'https://fastwpdemo.com/newwp/immigo/wp-content/themes/immigo/';

    $('link[rel*=jquery]').remove();

    $('head').append('<link rel="stylesheet jquery" href="'+linkcss+'assets/css/color.php?main_color='+primary_color+'&second_color='+second_color+'" type="text/css" />');

    return false;

  });

});



jQuery(document).ready(function($) {

	"use strict";

    $('.color-trigger').on('click', function () {
        $(this).parent().toggleClass('visible-palate');
    });
	
	$('.color-palate .colors-list .palate').on('click', function() {
		var newThemeColor = $(this).attr('data-theme-file');
		var targetCSSFile = $('link[id="theme-color-file"]');
	   $(targetCSSFile).attr('href',newThemeColor);
	   $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
	});
	
}(jQuery));





jQuery(document).ready(function($) {
	"use strict";
	
	$(".switcher .fa-cog").click(function(e) { 

	e.preventDefault();

	$(".switcher").toggleClass("active");

	});

});