var toArray = function(list) {
	return Array.prototype.slice.call(list || [], 0);
};

var query = function(query) {
	return queryAll(query)[0];
}

var queryAll = function(query) {
	return toArray(document.querySelectorAll(query));
};

var addClass = function(node, classStr) {
	node.className = 'slide ' + classStr;
};

var removeClass = function(node) {
	node.className = 'slide';
};
