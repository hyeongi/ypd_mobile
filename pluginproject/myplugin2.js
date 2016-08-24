'use strict';

exports.register = function(server, options, next){
	
	server.route({
		method: 'GET',
		path: '/test2',
		handler: function(request, reply){
			reply('test2 passed');
		}
	});
	
	next();
}

exports.register.attributes = {
		name: 'myplugin2'
}