(function ($, root, undefined) { 
	$(function () { 
		'use strict'; 
		// DOM ready, take it away 
		$('.signup-bar .close').on('click',function(){ 
			$(this).parent().fadeOut('slow'); 
		}); 
	}); 
})(jQuery, this);