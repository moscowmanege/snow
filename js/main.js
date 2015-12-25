$(document).ready(function() {
	var parent = $('.column');
	var parent_height = parent.height();
	var $items = $('.item');

	function repeatOften() {
		$items.quickEach(function() {
			this.css('background-position-y', this.offset().top * 100 / parent_height + '%');
		});
		requestAnimationFrame(repeatOften);
	}
	requestAnimationFrame(repeatOften);
});


// $(document).ready(function() {
// 	var parent = $('.column');
// 	var parent_height = parent.height();
// 	var $items = $('.item');

// 	function repeatOften() {
// 		$items.each(function() {
// 			var $this = $(this);
// 			var offset = $this.offset().top * 100 / parent_height * 1; // 20 or 1
// 			$this.css('background-position', '50% ' + offset + '%');
// 		});
// 	  requestAnimationFrame(repeatOften);
// 	}
// 	requestAnimationFrame(repeatOften);
// });