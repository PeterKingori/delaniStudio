jQuery(document).ready(function () {
	jQuery('div#design').click(function () {
		jQuery('#design-text').toggle();
		jQuery('#design-img').toggle();
	});
	jQuery('div#dev').click(function () {
		jQuery('#dev-text').toggle();
		jQuery('#dev-img').toggle();
	});
	$('div#product').click(function() {
		$('#product-text').toggle();
		$('#product-img').toggle();
	});	
});