(function ($, root, undefined) { 
	$(function () { 
		'use strict'; 
		// DOM ready, take it away 
		$('.signup-bar .close').on('click',function(){ 
			$('.signup-bar').fadeOut('slow'); 
		}); 
	}); 
})(jQuery, this);