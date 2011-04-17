var doc = document;

var Slide = function(node) {
	this._node = node;
	this._count = this._count + 1;
	if (this._node) {
		addClass(this._node, 'slide');
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
var c = doc.createElement('span');
c.textContent = this._count;
c.className = 'counter';
this._node.appendChild(c);
},
};