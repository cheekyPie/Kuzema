function setScrolls() {
	$(".scroll-link").click(function(event) {
		const anchorId = $(this)[0].hash;
		$("html, body").animate({ scrollTop: $(anchorId).offset().top }, "slow");
	});
}

function setUpslideshow() {
	const slides = $(".slideshow .image-container");
	var index = 0;
	var currentSlide = $(slides[index]);

	currentSlide.show();
}

$(document).ready(function() {
	setUpslideshow();
	setScrolls();
});
