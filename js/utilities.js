if (!('map' in Array.prototype)) {
	Array.prototype.map = function(mapper, that /* opt */) {
		var other = new Array(this.length);
		for ( var i = 0, n = this.length; i < n; i++)
			if (i in this)
				other[i] = mapper.call(that, this[i], i, this);
		return other;
	};
}

if (!('forEach' in Array.prototype)) {
	Array.prototype.forEach = function(action, that /* opt */) {
		for ( var i = 0, n = this.length; i < n; i++)
			if (i in this)
				action.call(that, this[i], i, this);
	};
}

var toArray = function(list) {
	var results = [];
	for ( var i = 0; i < list.length; i++) {
		results.push(list[i]);
	}
	return results;
};

var query = function(query) {
	return queryAll(query)[0];
}

var queryAll = function(query) {
	return toArray($(query));
};

var addClass = function(node, style) {
	$(node).removeClass('current');
	$(node).removeClass('very'.style);
	$(node).addClass(style);
};
