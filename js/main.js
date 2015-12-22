$(document).ready(function() {
	var parent = $('.column');
	var max = parent[0].scrollHeight - parent[0].offsetHeight - 20;

	var parent_height = parent.height();

	parent.on('scroll', function(event) {
	    var s = $(this).scrollTop(),
	        f = $('>:first', parent),l = $('>:last', parent);
	    if(s > max) {f.appendTo(parent); parent.scrollTop(s - f.height())}
	    if(s < 5) {l.prependTo(parent);parent.scrollTop(s + l.height()) }
	}).scrollTop(5);

	parent.on('scroll', function() {

		$('.item').each(function(index, el) {
			var $this = $(this);
			var offset = $this.offset().top * 100 / parent_height * 1; // 20 or 1
			$this.css('background-position', '50% ' + offset + '%');
		});

	});

	parent.on('scroll', function() {
		position = parent.scrollTop();
		parent.not(this).scrollTop(position);
	});
});