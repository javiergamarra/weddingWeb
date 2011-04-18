var doc = document;

var Slide = function(node) {
	this._node = node;
	if (this._node) {
		addClass(this._node, 'slide');
	}
};

Slide.prototype = {
	_node: null,
	_currentState: '',
	_states: [ 'distant-slide', 'far-past','past', 'current', 'future','far-future', 'distant-slide' ],
	setState: function(state) {
		if (typeof state != 'string') {
			state = this._states[state];
		}
		removeClass(this._node, this._states);
		addClass(this._node, state);
		this._currentState = state;
	},
};