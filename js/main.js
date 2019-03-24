function setScrolls() {
	$(".scroll-link").click(function(event) {
		event.preventDefault();
		const anchorId = $(this)[0].hash;
		$("html, body").animate({ scrollTop: $(anchorId).offset().top }, "slow");
	});
};

function setBagListItemClickEvents() {
	$('.bag-list-item').click(function() {
		$('.bag-list-item img').removeClass('selected');
		$(this).children('img').addClass('selected');
		const locationParts = this.children[0].src.split('/');
		const fileName = locationParts[locationParts.length - 1];
		$('.bag-design-field').val(fileName);
		const bagPreviewImage = $('.bag-preview');
		bagPreviewImage.attr("src", ('images/' + fileName));
	})
};

function setBagNamePreviewChangeEvent() {
	$('.bag-name-preview-field').on('input', function() {
		const name = this.value;
    $('.bag-name-preview-text').text(name);
    $('.bag-name-field').val(name);
	});
};

function setCoverImage() {
	const coverImageFileName = getUrlParameter('cover') || '21.jpg';
	const cssValue = 'url(images/' + coverImageFileName + ')';
	const heroContainer = $('#copy .top');
	heroContainer.css('background-image', cssValue);
};

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      	sURLVariables = sPageURL.split('&'),
      	sParameterName;

  for (var i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

$(document).ready(function() {
	setScrolls();
	setCoverImage();
	setBagListItemClickEvents();
	setBagNamePreviewChangeEvent();
});
