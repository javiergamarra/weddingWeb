var doc = document;

var SlideShow = function(slides) {
	this._slides = (slides).map(function(el) {
		return new Slide(el);
	});
	this.current = (!this.current) ? "landing-slide" : this.current.replace(
			'#', '');
	var _t = this;

	if (doc.addEventListener) {
		doc.addEventListener('keydown', function(e) {
			_t.handleKeys(e);
		}, false);
		query('#right-arrow').addEventListener('click', function() {
			_t.next();
		}, false);
		query('#left-arrow').addEventListener('click', function() {
			_t.prev();
		}, false);
		query('#up-arrow').addEventListener('click', function() {
			_t.up();
		}, false);
	} else if (doc.attachEvent) {
		doc.attachEvent('keydown', function(e) {
			_t.handleKeys(e);
		});
		query('#right-arrow').attachEvent('click', function() {
			_t.next();
		});
		query('#left-arrow').attachEvent('click', function() {
			_t.prev();
		});
		query('#up-arrow').attachEvent('click', function() {
			_t.up();
		}, false);
	}

	this._update();
};



SlideShow.prototype = {
		  _nameSlides: [ 'down-slide', 'left-slide','landing-slide', 'right-slide', 'up-slide' ],
		  _slides: [],
		  _getCurrentIndex: function() {
		    var me = this;
		    var slideCount = null;
		    queryAll('.slide').forEach(function(slide, i) {
		      if (slide.id == me.current) {
		        slideCount = i;
		      }
		    });
		    return slideCount;  
		  },
		  _update: function(slide) {
			  this.current = (slide) ? slide.id : this.current;
  		  var index = this._getCurrentIndex();
  		  var downSlide =this._slides[0];
  		  var leftSlide =this._slides[1];
  		  var centerSlide =this._slides[2];
  		  var rightSlide =this._slides[3];
  		  var upSlide =this._slides[4];
  		  downSlide.setStyle('vertical down-slide');
			   upSlide.setStyle('vertical up-slide');
  		  if (this._nameSlides[this._getCurrentIndex()] == 'landing-slide') {
  			  downSlide.setStyle('vertical down-slide');
    			   upSlide.setStyle('vertical up-slide');
      		   leftSlide.setStyle('left-slide');
      		   centerSlide.setStyle('current');
      		   rightSlide.setStyle('right-slide');
  		  }
  		  if (this._nameSlides[this._getCurrentIndex()] == 'left-slide') {
 			   downSlide.setStyle('vertical down-slide');
 			   upSlide.setStyle('vertical up-slide');
     		   leftSlide.setStyle('current');
     		   centerSlide.setStyle('right-slide');
     		   rightSlide.setStyle('veryright-slide');
 		  }
  		  if (this._nameSlides[this._getCurrentIndex()] == 'right-slide') {
    			   downSlide.setStyle('vertical down-slide');
    			   upSlide.setStyle('vertical up-slide');
        		   leftSlide.setStyle('veryleft-slide');
        		   centerSlide.setStyle('left-slide');
        		   rightSlide.setStyle('current');
    		  }
  		  if (this._nameSlides[this._getCurrentIndex()] == 'up-slide') {
    			   downSlide.setStyle('vertical verydown-slide');
    			   upSlide.setStyle('current');
        		   leftSlide.setStyle('veryleft-slide');
        		   centerSlide.setStyle('vertical down-slide');
        		   rightSlide.setStyle('veryright-slide');
    		  }
  		  if (this._nameSlides[this._getCurrentIndex()] == 'down-slide') {
   			   downSlide.setStyle('current');
   			   upSlide.setStyle('vertical veryup-slide');
       		   leftSlide.setStyle('veryleft-slide');
       		   centerSlide.setStyle('vertical up-slide');
       		   rightSlide.setStyle('veryright-slide');
   		  }
  		  
		  },
		  next: function() {
			var slide;
			 if (this._nameSlides[this._getCurrentIndex()] == 'left-slide') {
				slide = '#landing-slide';
			 } else {
				slide = '#right-slide';
			 }
			this._update(query(slide));
		  },
		  prev: function() {
			var slide;
			 if (this._nameSlides[this._getCurrentIndex()] == 'right-slide') {
				slide = '#landing-slide'; 
			 } else {
				slide = '#left-slide';
			 }
			this._update(query(slide));
		  },
		up: function() {
			var slide;
			if (this._nameSlides[this._getCurrentIndex()] == 'down-slide') {
				 slide = '#landing-slide'; 
			} else {
				 slide = '#up-slide';
			}
			this._update(query(slide));
		},
		down: function() {
			var slide;
			 if (this._nameSlides[this._getCurrentIndex()] == 'up-slide') {
				slide = '#landing-slide'; 
			 } else {
				slide = '#down-slide';
			 }
			this._update(query(slide));
		},
		 current: 0,
		  	reset: function(evt) {
			
			if(!evt) evt=window.event; 
			var target = evt.srcElement;
			if (!evt.srcElement) target = evt.target 
			
			if(target.className != 'arrows') {
			this._update(query('#landing-slide'));
			}
		  },
		 changeTheme: function() {
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
		  handleKeys: function(e) {
		    switch (e.keyCode) {
		      case 37: // left arrow
		        this.prev(); break;
		      case 38: // space
		        this.up(); break;
// case 32: // space
		      case 39: // right arrow
		        this.next(); break;
		      case 40: // down arrow
		        this.down(); break;
// case 84: // T
// this.changeTheme(); break;
		    }
		  },
		};


var slideshow = new SlideShow(queryAll('.slide'));


if (doc.addEventListener) {
	document.addEventListener('DOMContentLoaded', function() {
		query('.slides').style.display = 'block';
	}, false);
} else if (doc.attachEvent) {
	document.attachEvent('DOMContentLoaded', function() {
		query('.slides').style.display = 'block';
	});
}
