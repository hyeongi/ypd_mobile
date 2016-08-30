/**
 * New node file
 */

var fs = require('fs');


fs.unlink('./test', function(err){
	
	if(err){
		throw err;
	}
	
	console.log('successfully deleted ./test');
});
