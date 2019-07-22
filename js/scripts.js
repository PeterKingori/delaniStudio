$(function () {
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

	jQuery('div.project1').hover(function () {
		jQuery('div.projectName1').toggle();
		jQuery('img.projectImage1').toggleClass('opaque1');
	});
	jQuery('div.project2').hover(function () {
		jQuery('div.projectName2').toggle();
		jQuery('img.projectImage2').toggleClass('opaque1');		
	});
	jQuery('div.project3').hover(function () {
		jQuery('div.projectName3').toggle();
		jQuery('img.projectImage3').toggleClass('opaque1');		
	});
	jQuery('div.project4').hover(function () {
		jQuery('div.projectName4').toggle();
		jQuery('img.projectImage4').toggleClass('opaque1');		
	});
	jQuery('div.project5').hover(function () {
		jQuery('div.projectName5').toggle();
		jQuery('img.projectImage5').toggleClass('opaque1');		
	});
	jQuery('div.project6').hover(function () {
		jQuery('div.projectName6').toggle();
		jQuery('img.projectImage6').toggleClass('opaque1');		
	});
	jQuery('div.project7').hover(function () {
		jQuery('div.projectName7').toggle();
		jQuery('img.projectImage7').toggleClass('opaque1');		
	});
	jQuery('div.project8').hover(function () {
		jQuery('div.projectName8').toggle();
		jQuery('img.projectImage8').toggleClass('opaque1');		
	});
	
	jQuery('form#contact-form').submit(function (event) {
		event.preventDefault();
		var userName = document.getElementById('name').value;
		alert(userName + ' we have received your message. Thank you for reaching out to us.');
		jQuery('#contact-form')[0].reset();
		//		document.getElementById('contact-form').reset();
	})
});