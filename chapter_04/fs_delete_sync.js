/**
 * New node file
 */

var fs = require('fs');

/*try {
	fs.unlinkSync('./test');
	console.log('successfully delete ./test');
}
catch (e){
	console.log('Error: ', e);
}
finally {
	
}*/


fs.rename('./test', './test_new', function(err) {
	
	if(err){
		throw err;
	}
	
	fs.stat('./test_new', function(err, stats) {
		
		if(err){
			throw err;
		}
		
		console.log('stats: ', JSON.stringify(stats));
	});	
});




