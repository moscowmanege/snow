// $(document).ready(function() {
// 	var parent = $('.column');
// 	var max = parent[0].scrollHeight - parent[0].offsetHeight - 20;

	// var parent_height = parent.height();

// 	parent.on('scroll', function(event) {
// 			var $this = $(this);
// 	    var s = $this.scrollTop(),
// 	        f = $('>:first', $this),l = $('>:last', $this);
// 	    if(s > max) {f.appendTo($this); $this.scrollTop(s - f.height())}
// 	    if(s < 5) {l.prependTo($this); $this.scrollTop(s + l.height()) }
// 	}).scrollTop(5);

// 	parent.on('mouseover', function() {
// 		var self = this;

// 		parent.off('scroll.tiles').filter(self).on('scroll.tiles', function(event) {
// 			$('.item').each(function() {
// 				var $this = $(this);
// 				var offset = $this.offset().top * 100 / parent_height * 1; // 20 or 1
// 				$this.css('background-position', '50% ' + offset + '%');
// 			});
// 		});

// 		parent.off('scroll.columns').filter(self).on('scroll.columns', function(event) {
// 			position = $(this).scrollTop();
// 			parent.not(self).scrollTop(position);
// 		});
// 	}).eq(0).trigger('mouseover');
// });


$(document).ready(function() {
	var parent = $('.column');
	var parent_height = parent.height();
	var $items = $('.item');

	function repeatOften() {
		$items.each(function() {
			var $this = $(this);
			var offset = $this.offset().top * 100 / parent_height * 1; // 20 or 1
			$this.children('.letter').css('background-position', '50% ' + offset + '%');
		});
	  requestAnimationFrame(repeatOften);
	}
	requestAnimationFrame(repeatOften);
});