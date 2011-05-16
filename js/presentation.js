var doc = document;

var SlideShow = function(slides) {
	this._slides = (slides).map(function(el) {
		return new Slide(el);
	});
	this.current = (!this.current) ? "landing-slide" : this.current.replace(
			'#', '');
	var _t = this;
	$("#landing-slide").click(function(event) {
		if (!($(event.target).hasClass('arrows'))) {
			_t._update(query('#landing-slide'));
		}
	});
	$(document).keydown(function(event) {
		_t.handleKeys(event);
	});
	$(".right-arrow").click(function() {
		_t.next();
	});
	$(".left-arrow").click(function() {
		_t.prev();
	});
	$(".up-arrow").click(function() {
		_t.up();
	});
	$(".down-arrow").click(function() {
		_t.down();
	});
	$(".figure").click(function(event) {
		createPanel(event.target)
	});
	this._update();
};

//FIXME REFACTOR NEEDED!!!!!
SlideShow.prototype = {
	_nameSlides : [ 'down-slide', 'left-slide', 'landing-slide', 'right-slide',
			'up-slide' ],
	_slides : [],
	_getCurrentIndex : function() {
		var me = this;
		var slideCount = null;
		queryAll('.slide').forEach(function(slide, i) {
			if (slide.id == me.current) {
				slideCount = i;
			}
		});
		return slideCount;
	},
	_update : function(slide) {
		this.current = (slide) ? slide.id : this.current;
		var index = this._getCurrentIndex();
		var downSlide = this._slides[0];
		var leftSlide = this._slides[1];
		var centerSlide = this._slides[2];
		var rightSlide = this._slides[3];
		var upSlide = this._slides[4];
		if (this._nameSlides[this._getCurrentIndex()] == 'landing-slide') {
			addClass('#down-slide', 'down-slide')
			addClass('#up-slide', 'up-slide')
			addClass('#landing-slide', 'current')
			addClass('#right-slide', 'right-slide')
			addClass('#left-slide', 'left-slide')
		}
		if (this._nameSlides[this._getCurrentIndex()] == 'up-slide') {
			addClass('#down-slide', 'verydown-slide')
			addClass('#up-slide', 'current')
			addClass('#landing-slide', 'down-slide')
			addClass('#right-slide', 'veryright-slide')
			addClass('#left-slide', 'veryleft-slide')
		}
		if (this._nameSlides[this._getCurrentIndex()] == 'down-slide') {
			addClass('#down-slide', 'current')
			addClass('#up-slide', 'veryup-slide')
			addClass('#landing-slide', 'up-slide')
			addClass('#right-slide', 'veryright-slide')
			addClass('#left-slide', 'veryleft-slide')
		}
		if (this._nameSlides[this._getCurrentIndex()] == 'right-slide') {
			addClass('#down-slide', 'down-slide')
			addClass('#up-slide', 'up-slide')
			addClass('#landing-slide', 'left-slide')
			addClass('#right-slide', 'current')
			addClass('#left-slide', 'veryleft-slide')
		}
		if (this._nameSlides[this._getCurrentIndex()] == 'left-slide') {
			addClass('#down-slide', 'down-slide')
			addClass('#up-slide', 'up-slide')
			addClass('#landing-slide', 'right-slide')
			addClass('#right-slide', 'veryright-slide')
			addClass('#left-slide', 'current')
		}
	},
	next : function() {
		var slide;
		if (this._nameSlides[this._getCurrentIndex()] == 'left-slide') {
			slide = '#landing-slide';
		} else {
			slide = '#right-slide';
		}
		this._update(query(slide));
	},
	prev : function() {
		var slide;
		if (this._nameSlides[this._getCurrentIndex()] == 'right-slide') {
			slide = '#landing-slide';
		} else {
			slide = '#left-slide';
		}
		this._update(query(slide));
	},
	up : function() {
		var slide;
		if (this._nameSlides[this._getCurrentIndex()] == 'down-slide') {
			slide = '#landing-slide';
		} else {
			slide = '#up-slide';
		}
		this._update(query(slide));
	},
	down : function() {
		var slide;
		if (this._nameSlides[this._getCurrentIndex()] == 'up-slide') {
			slide = '#landing-slide';
		} else {
			slide = '#down-slide';
		}
		this._update(query(slide));
	},
	current : 0,
	changeTheme : function() {
		var linkEls = queryAll('.theme');
		var sheetIndex = 0;
		linkEls.forEach(function(stylesheet, i) {
			if (!stylesheet.disabled) {
				sheetIndex = i;
			}
		});
		linkEls[sheetIndex].disabled = true;
		linkEls[(sheetIndex + 1) % linkEls.length].disabled = false;
	},
	handleKeys : function(e) {
		switch (e.keyCode) {
		case 37: // left arrow
			this.prev();
			break;
		case 38: // space
			this.up();
			break;
		// case 32: // space
		case 39: // right arrow
			this.next();
			break;
		case 40: // down arrow
			this.down();
			break;
		// case 84: // T
		// this.changeTheme(); break;
		}
	}
};

var slideshow;

$(document).ready(function() {
	slideshow = new SlideShow(queryAll('.slide'));
});
