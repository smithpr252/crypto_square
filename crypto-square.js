
var Crypto = function(text) {

	this.text = text; 

};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();
	// global flag regular expression "[\W]/g,"
	// g means global and replaces more than just the first case of W which means to replace none word characters with ""
};

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function() {
	var text = this.normalizePlaintext(),
		size = this.size(),
		segs = [];

	for (var i = 0; i < text.length; i += size) {
		segs.push(text.slice(i, i+size));
	};
	return segs; 

};

Crypto.prototype.ciphertext = function() {
	var code = "",
		size = this.size(), 
		segs = this.plaintextSegments();

	for (var i = 0; i < size; i += 1) {
		for (var j = 0; j < segs.length; j+= 1) {
			code += segs[j].charAt(i);
		}

	}
	
	return code;
};


module.exports = Crypto;



