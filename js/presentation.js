var doc = document;

var SlideShow = function(slides) {
	 this._slides = (slides).map(function(el) {
	      return new Slide(el);
	    });
    this.current = (!this.current) ? "landing-slide" : this.current.replace('#', '');
    var _t = this;
    doc.addEventListener('keydown', 
        function(e) { _t.handleKeys(e); }, false);
    this._update2();
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
  		  _update2: function(slide) {
  			  this.current = (slide) ? slide.id : this.current;
    		  var index = this._getCurrentIndex();
    		  window.location.hash = this.current;
    		  var downSlide =this._slides[0];
    		  var leftSlide =this._slides[1];
    		  var centerSlide =this._slides[2];
    		  var rightSlide =this._slides[3];
    		  var upSlide =this._slides[4];
    		  if (this._nameSlides[this._getCurrentIndex()] == 'landing-slide') {
    			   downSlide.setStyle('down-slide');
        		   leftSlide.setStyle('left-slide');
        		   centerSlide.setStyle('current');
        		   rightSlide.setStyle('right-slide');
        		   upSlide.setStyle('up-slide');
    		  }
    		  if (this._nameSlides[this._getCurrentIndex()] == 'left-slide') {
   			   downSlide.setStyle('down-slide');
   			   upSlide.setStyle('up-slide');
       		   leftSlide.setStyle('current');
       		   centerSlide.setStyle('right-slide');
       		   rightSlide.setStyle('veryright-slide');
   		  }
    		  if (this._nameSlides[this._getCurrentIndex()] == 'right-slide') {
      			   downSlide.setStyle('down-slide');
      			   upSlide.setStyle('up-slide');
          		   leftSlide.setStyle('veryleft-slide');
          		   centerSlide.setStyle('left-slide');
          		   rightSlide.setStyle('current');
      		  }
    		  if (this._nameSlides[this._getCurrentIndex()] == 'up-slide') {
      			   downSlide.setStyle('');
      			   upSlide.setStyle('current');
          		   leftSlide.setStyle('');
          		   centerSlide.setStyle('down-slide');
          		   rightSlide.setStyle('');
      		  }
    		  if (this._nameSlides[this._getCurrentIndex()] == 'down-slide') {
     			   downSlide.setStyle('current');
     			   upSlide.setStyle('');
         		   leftSlide.setStyle('');
         		   centerSlide.setStyle('up-slide');
         		   rightSlide.setStyle('');
     		  }
    		  
  		  },
  		  current: 0,
  		  next: function() {
  			var slide;
			 if (this._nameSlides[this._getCurrentIndex()] == 'left-slide') {
				slide = '#landing-slide';
			 } else {
				slide = '#right-slide';
			 }
 			this._update2(query(slide));
  		  },
 		  prev: function() {
  			var slide;
			 if (this._nameSlides[this._getCurrentIndex()] == 'right-slide') {
				slide = '#landing-slide'; 
			 } else {
				slide = '#left-slide';
			 }
			this._update2(query(slide));
  		  },
 		up: function() {
  			var slide;
  			if (this._nameSlides[this._getCurrentIndex()] == 'down-slide') {
  				 slide = '#landing-slide'; 
  			} else {
  				 slide = '#up-slide';
  			}
  			this._update2(query(slide));
  		},
  		down: function() {
  			var slide;
 			 if (this._nameSlides[this._getCurrentIndex()] == 'up-slide') {
 				slide = '#landing-slide'; 
 			 } else {
 				slide = '#down-slide';
 			 }
 			this._update2(query(slide));
  		},
  		  handleKeys: function(e) {
  		    switch (e.keyCode) {
  		      case 37: // left arrow
  		        this.prev(); break;
  		      case 38: // space
  		        this.up(); break;
  		      case 32: // space
		      case 39: // right arrow
		        this.next(); break;
  		      case 40: // space
		        this.down(); break;
  		    }
  		  },
  		};
  
  
var slideshow = new SlideShow(queryAll('.slide'));

document.addEventListener('DOMContentLoaded', function() {
	query('.slides').style.display = 'block';
}, false);
