function setScrolls() {
	$(".scroll-link").click(function(event) {
		const anchorId = $(this)[0].hash;
		$("html, body").animate({ scrollTop: $(anchorId).offset().top }, "slow");
	});
}

$(document).ready(function() {
	setScrolls();
});
