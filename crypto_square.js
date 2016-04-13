
var Crypto = function(text) {

	this.text = text; 

};

Crypto.prototype.normalizePlaintext = function () {
	return this.text.replace(/[\W]/g, "").toLowerCase();
	// global flag regular expression "[\W]/g,"
	// g means global and replaces more than just the first case of W which means to replace none word characters with ""
};

module.exports = Crypto;