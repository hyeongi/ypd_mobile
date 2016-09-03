var util = require('util');
var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();

// define listener counts
emitter.setMaxListeners(0); //no limit listener counts

var callback = function(stream) {

	console.log(stream.name + " connected this chatting room!");
};

var callback2 = function(stream) {
	console.log(stream.name + " connected this chatting room!, watched by callback2");
};

emitter.addListener('connect', callback);
emitter.addListener('connect', callback2);

console.log(
		util.inspect( emitter.listeners('connect'))
		); //[Function]



emitter.emit('connect', {name: 'kevin'});