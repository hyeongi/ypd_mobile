'use strick';

const Hapi = require('hapi');
const Inert = require('inert');
const Good = require('good');

const server = new Hapi.Server();
server.connection({ 
	port: 3000,
	labels: ['mobileServer']
});

server.register({
	register: Good,
	options: {
		reporters: {
			console: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args:[{
					response: '*',
					log: '*'
				}]
			}, {
				module: 'good-console'
			}, 'stdout']
		}
	}
}, function(err) {
	if(err){
		throw err; //something bad happend loading the plugin
	}
});

server.register([{register: require('./myplugin')},{register: require('./myplugin2')}], function(err) {

    if (err) {
        throw err;
    }    
});

server.start(function(err) {
	if(err) {
		throw err;
	}	
	server.log('info', 'Server running at:' + server.info.uri);
});



