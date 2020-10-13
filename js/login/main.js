$(document).ready(function() {
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 4000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout:4000,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1,
			after: function(last,current){
							// console.log($(current).find('.light-text').html());
			}
			}
	});
});