'use strict';

const Hapi = require('hapi');
const Basic = require('hapi-auth-basic');

const server = new Hapi.Server();
server.connection({
	port: 3001
});

const users = {
	john: {
		username: 'john',
		password: 'secret', // 'secret'
		name: 'John Doe',
		id: '2133d32a'
	}	
};

const validate = function(request, username, password, callback){
	const user = users[username];
	if(!user){
		return callback(null, false);
	}
	
	if(password == user.password){
		callback(null, true, {id: user.id, name: user.name});
	}
	else{
		callback(null, false, {id:'stranger', name: 'stranger'});
	}
		
};


server.register(Basic, function(err) {
	if(err){
		throw err;
	}
	
	
	server.auth.strategy('simple', 'basic', {validateFunc: validate});
	server.route({
		method: 'GET',
		path: '/',
		config: {
			auth: 'simple',
			handler: function(request, reply){
				reply('hello, ' + request.auth.credentials.name);
			}
		}
	});
});

server.start(function(err){
	if(err){
		throw err;
	}
	
	console.log('server started');
});