$(document).ready(function() {
			// Globals
			// ----------------------------------
	
	var webiconselector = '.web-icons-image-div';

	var defaultheight = 50;
	var defaultwidth = 50;
	
			// Sub-Globals
			// ----------------------------------
	
	var configurableselector = $('#web-icons-image-div-selector');
	
	if($(configurableselector) && $(configurableselector).attr('data-webicons-selector')) {
		webiconselector = $(configurableselector).attr('data-webicons-selector');
	}
	
	var halfclickheight = Math.floor(defaultheight/20);
	var halfclickwidth = Math.floor(defaultwidth/20);
	
	var clickheight = Math.floor(defaultheight/10);
	var clickwidth = Math.floor(defaultwidth/10);
	
	var subheight = Math.floor(defaultheight/2);
	var subwidth = Math.floor(defaultwidth/2);
	
	var expandedheight = defaultheight * 2;
	var expandedwidth = defaultwidth * 2;
	
	var animationduration = 200;
	
	var activeanimations = {};
	var activeanimation = false;
	
			// Logic
			// ----------------------------------
	
	$(webiconselector).find('img').prop('height', defaultheight);
	$(webiconselector).find('img').prop('width', defaultwidth);
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
		console.log("BT: Mousedown go!" + clickwidth + "|");
		
		console.log("BT: This imG???");
		console.log($(this).find('img'));
		$(this).css({
			'left':clickwidth + 'px',
			'top':clickheight + 'px',
		});
	});
	
	$(webiconselector).mouseup(function(e) {
		console.log("BT: Mouseup go!" + clickwidth + "|");
		$(this).animate({
			'left':'0px',
			'top':'0px',
		}, 100);
	});
});
