var util = require('util');
// http module
var http = require('http');
//var https = require('https');

// server object 
var server = http.createServer(function(request, response){
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end('<b>Hello!</b>');
});

// for redirect
var server2 = http.createServer(function(request, response){
	response.writeHead(302, { 'Location': 'http://www.google.com' });
	response.end();
});

// for cookie
var server3 = http.createServer(function(request, response){
	
	
	
	var date = new Date();
	date.setDate(date.getDate() + 7);
	
	response.writeHead(	200, 
						{
							'Content-Type':'text/html', 
							'Set-Cookie':['authorized=yes;" + " Expires=' + date.toUTCString(), 'no_popup=yes']
						}
					);
	response.end('<h1>' + request.headers.cookie + '</h1>');
	
	console.log(request.headers);
});


//Callback functions
var serverStartCallback = function() {
	console.log('Server Start');
};

var eventCallback = function(stream) {
	console.log('client connected!');
};

var serverStopCallback = function() {
	console.log('Server Stop');
};

// start server
server.listen(5000, serverStartCallback);
server2.listen(5001, serverStartCallback);
server3.listen(5002, serverStartCallback);


// addListeners
server.addListener('connection', eventCallback);
server2.addListener('connection', eventCallback);
server3.addListener('connection', eventCallback);

server.addListener('close', serverStartCallback);
server2.addListener('close', serverStartCallback);
server3.addListener('close', serverStartCallback);

// stop server
//server.close();
