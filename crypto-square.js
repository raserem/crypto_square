//create our crypto class
//it takes a string as an argument
var Crypto = function(text) {
	//store the string for use elsewhere
	this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
	// var text = "s#$%^&plunk";
	return this.text.replace(/[\W]/g, "").toLowerCase();

};

	// var text = "1, 2, 3, GO!";
	// return this.text.replace(/[\W]/g, "").toLowerCase();

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function() {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size();

	for (var i = 0; i < npt.length; i += size) {
		segments.push(npt.slice(i,i+size));
	}

	return segments;

};

Crypto.prototype.ciphertext = function() {
	var ct = "";
		size = this.size();
		segs = this.plaintextSegments();

	for ( var i = 0; i < size; i += 1) {
			for (var j = 0; j < segs.length; j += 1) {
				ct += segs[j].charAt(i);
			}
	}

	return ct;

};


module.exports = Crypto;






