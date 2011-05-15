var doc = document;

var Slide = function(node) {
	this._node = node;
};

Slide.prototype = {
	_node: null,
	_currentState: '',
	_styles: [ 'veryleft-slide','veryright-slide','down-slide', 'left-slide','current', 'right-slide', 'up-slide' ]
};