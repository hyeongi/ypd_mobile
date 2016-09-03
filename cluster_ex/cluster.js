var util = require('util');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster){
	for(var i=0; i<numCPUs; i++){
		cluster.fork();
	}
	
	cluster.addListener('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' exit');
	});
	
	cluster.addListener('online', function(worker) {
		console.log("worker %s (%s) online", worker.id, worker.process.pid);
	});
	
	cluster.addListener('listening', function(worker, address) {
		console.log("worker %s listening %s", worker.id, util.inspect(address));
	});
} else {
	var server = require('./app');
	server.listen(3000);
}