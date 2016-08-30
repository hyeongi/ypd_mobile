/**
 * New node file
 */
var zlib = require('zlib');
var input = 'Writing an IT Book is very difficult';

zlib.deflate(input, function(err, buffer) {
	
	if(!err){
		console.log(buffer.toString('base64'));
		
		zlib.unzip(buffer, function(err, buffer2){
			if(!err){
				console.log(buffer2.toString());
			}
		});
	}
});
