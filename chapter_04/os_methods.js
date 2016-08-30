/**
 * New node file
 */

var os = require('os');

console.log('Hostname: ', os.hostname());
console.log('OS Type: ', os.type());
console.log('Platform: ', os.platform());
console.log('Architecture: ', os.arch());
console.log('Release Version: ', os.release());
console.log('System Uptime: ', os.uptime());

var cpus = os.cpus();

for(var i=0; i<cpus.length; i++){
	console.log('CPU[' + (i+1) + ']');
	console.log('model: ', cpus[i].model);
	console.log('speed: ', cpus[i].speed);
}

