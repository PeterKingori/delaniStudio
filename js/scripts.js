jQuery(document).ready(function () {
	jQuery('div#design').click(function () {
		jQuery('#design-text').toggle();
		jQuery('#design-img').toggle();
	});
	jQuery('div#dev').click(function () {
		jQuery('#dev-text').toggle();
		jQuery('#dev-img').toggle();
	});
	jQuery('div#product').click(function () {
		jQuery('#product-text').toggle();
		jQuery('#product-img').toggle();
	});
	jQuery('img.img1').hover(function () {
		jQuery(this).toggleClass('opaque1');
	});
});