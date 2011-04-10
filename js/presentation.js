        var doc = document;
 
        var Slide = function(node, idx) {
          this._node = node;
          if (idx >= 0) {
            this._count = idx + 1;
          }
          if (this._node) {
            addClass(this._node, 'slide distant-slide');
          }
          this._makeCounter();
        };
 
        Slide.prototype = {
          _node: null,
          _count: 0,
          _currentState: '',
          _states: [ 'distant-slide', 'far-past',
                     'past', 'current', 'future',
                     'far-future', 'distant-slide' ],
          setState: function(state) {
            if (typeof state != 'string') {
              state = this._states[state];
            }
            removeClass(this._node, this._states);
            addClass(this._node, state);
            this._currentState = state;
          },
          _makeCounter: function() {
            if(!this._count || !this._node) { return; }
            var c = doc.createElement('span');
            c.textContent = this._count;
            c.className = 'counter';
            this._node.appendChild(c);
          },
        };
 
        var SlideShow = function(slides) {
          this._slides = (slides || []).map(function(el, idx) {
            return new Slide(el, idx);
          });
          this.current = (!this.current) ? "landing-slide" : this.current.replace('#', '');
          var _t = this;
          doc.addEventListener('keydown', 
              function(e) { _t.handleKeys(e); }, false);
          this._update();
        };
 
        SlideShow.prototype = {
          _presentationCounter: query('#presentation-counter'),
          _slides: [],
          _getCurrentIndex: function() {
            var me = this;
            var slideCount = null;
            queryAll('.slide').forEach(function(slide, i) {
              if (slide.id == me.current) {
                slideCount = i;
              }
            });
            return slideCount + 1;  
          },
          _update: function(dontPush) {
            var docElem = document.documentElement;
            var elem = document.elementFromPoint( docElem.clientWidth / 2, docElem.clientHeight / 2);
            var currentIndex = this._getCurrentIndex();
            if (elem && elem.className != 'presentation') {
                this._presentationCounter.textContent = currentIndex;
            }
              window.location.hash = this.current;
            for (var x = currentIndex-1; x < currentIndex + 7; x++) {
              if (this._slides[x-4]) {
                this._slides[x-4].setState(Math.max(0, x-currentIndex));
              }
            }
          },
 
          current: 0,
          next: function() {
              var next = query('#' + this.current + ' + .slide');
              this.current = (next) ? next.id : this.current;
              this._update();
          },
          prev: function() {
            var prev = query('.slide:nth-child(' + (this._getCurrentIndex() - 1) + ')');
            this.current = (prev) ? prev.id : this.current;
            this._update();
          },
          handleKeys: function(e) {
            switch (e.keyCode) {
              case 37: // left arrow
                this.prev(); break;
              case 39: // right arrow
              case 32: // space
                this.next(); break;
            }
          },
        };
        
        // Initialize
        var slideshow = new SlideShow(queryAll('.slide'));
 
        document.addEventListener('DOMContentLoaded', function() {
          query('.slides').style.display = 'block';
        }, false);
 
