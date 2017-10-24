/* JavaScript Document*/
jQuery(document).ready(function(){
	jQuery('i.fa-bars, div.navbar-collapse').hover(function(){
		jQuery('div.navbar-collapse').addClass('hidden-menu');
	}, function(){
		jQuery('div.navbar-collapse').removeClass('hidden-menu');
	});
});