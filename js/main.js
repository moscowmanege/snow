$(document).ready(function() {
	var parent_height = $('.container').height();
	var $items = $('.item');

	function repeatOften() {
		$items.quickEach(function() {
			this.css('background-position-y', this.offset().top * 100 / parent_height + '%');
		});
		requestAnimationFrame(repeatOften);
	}
	requestAnimationFrame(repeatOften);
});