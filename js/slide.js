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
	_styles: [ 'veryleft-slide','veryright-slide','down-slide', 'left-slide','current', 'right-slide', 'up-slide' ],
	setStyle: function(state) {
		removeClass(this._node, this._styles);
		addClass(this._node, state);
		this._currentState = state;
	},
};