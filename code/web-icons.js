		// Globals
		// ----------------------------------

var webiconselector = '.share-url-image';

var halfclickheight = 5;
var halfclickwidth = 5;

var clickheight = 10;
var clickwidth = 10;

var subheight = 50;
var subwidth = 50;

var defaultheight = 100;
var defaultwidth = 100;

var expandedheight = 200;
var expandedwidth = 200;

var animationduration = 200;

var activeanimations = {};
var activeanimation = false;

		// Code
		// ----------------------------------

$(document).ready(function() {
	$(webiconselector).prop('height', defaultheight);
	$(webiconselector).prop('width', defaultwidth);
	$(webiconselector).mouseover(function(e) {
		if(activeanimation) {
			return false;
		}
		if(activeanimations[$(this).attr('data-service')]) {
			return false;
		}
		activeanimation = true;
		activeanimations[$(this).attr('data-service')] = true;
		$(this).height(defaultheight);
		$(this).width(defaultwidth);
		$(this).css('zIndex', 1000);
		var that = this;
		$(this).find('img').animate({
			'height':expandedheight + 'px',
			'width':expandedwidth + 'px',
			'margin-top':'-' + subheight + 'px',
			'margin-bottom':'-' + subheight + 'px',
			'margin-left':'-' + subwidth + 'px',
			'margin-right':'-' + subwidth + 'px',
		}, animationduration, function() {
			activeanimations[$(that).attr('data-service')] = false;
		});
		$(this).css({'transform': 'rotate(360deg)', 'transition-duration': '.5s'});
		activeanimation = false;
	});
	
	$(webiconselector).mouseout(function(e) {
		$(this).height(defaultheight);
		$(this).width(defaultwidth);
		var that = this;
		$(this).find('img').animate({
			'height':defaultheight + 'px',
			'width':defaultwidth + 'px',
			'margin-top':'0px',
			'margin-bottom':'0px',
			'margin-left':'0px',
			'margin-right':'0px',
		}, animationduration, function() {
			$(that).css('zIndex', 100);
			activeanimations[$(that).attr('data-service')] = false;
		});
		$(this).css({'transform': 'rotate(0deg)', 'transition-duration': '0.1s'});
	});
	
	$(webiconselector).mousedown(function(e) {
		$(this).css({
			'left':clickwidth + 'px',
			'top':clickheight + 'px',
		});
	});
	
	$(webiconselector).mouseup(function(e) {
		$(this).animate({
			'left':'-' + halfclickwidth + 'px',
			'top':'-' + halfclickheight + 'px',
		}, 100);
	});
});