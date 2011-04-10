var toArray = function(list) {
	return Array.prototype.slice.call(list || [], 0);
};

var query = function(query) {
	return queryAll(query)[0];
}

var queryAll = function(query) {
	return toArray(document.querySelectorAll(query));
};

var spaces = /\s+/, a1 = [ '' ];

var strToArray = function(s) {
	if (typeof s == 'string' || s instanceof String) {
		if (s.indexOf(' ') < 0) {
			a1[0] = s;
			return a1;
		} else {
			return s.split(spaces);
		}
	}
	return s;
};

var trim = function(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

var addClass = function(node, classStr) {
	classStr = strToArray(classStr);
	var cls = ' ' + node.className + ' ';
	for ( var i = 0, len = classStr.length, c; i < len; ++i) {
		c = classStr[i];
		if (c && cls.indexOf(' ' + c + ' ') < 0) {
			cls += c + ' ';
		}
	}
	node.className = trim(cls);
};

var removeClass = function(node, classStr) {
	var cls;
	classStr = strToArray(classStr);
	cls = ' ' + node.className + ' ';
	for ( var i = 0, len = classStr.length; i < len; ++i) {
		cls = cls.replace(' ' + classStr[i] + ' ', ' ');
	}
	cls = trim(cls);
	if (node.className != cls) {
		node.className = cls;
	}
};
