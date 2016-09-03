var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	
	var urlObj = url.parse(request.url, true);
	var fileName = urlObj.pathname.replace("/", "") + ".html";
	
	console.log('requested url : ' + urlObj.pathname);
	console.log('read fileName : ' + fileName);
	
	//read file
	fs.readFile(fileName, function(err, data) {
		if(err){
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end("404 Not Found\n");
			console.error(err.toString());
		}
		else
		{
			//if exist file
			response.writeHead(200, {"Content-Type":"text/html;"});
			response.end(data);
		}
	});
			
});


if(!module.parent) {
	server.listen(3000, function(){
		console.log("server listening on port %d", 3000);
	});
} else {
	module.exports = server;
}