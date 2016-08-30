/**
 * New node file
 */

var fs = require('fs');

//argument loop
process.argv.forEach(function(item, i) {
	
	console.log(i + ' : ' + item); //print each arguments
	
	if(i == 2){ //if argument index == 2, read file which is same name with argument value
		fs.readFile(item, 'utf8', function(err, data) { //(filename, encoding, error handler)
			console.log(data);
		});
	}
		
});