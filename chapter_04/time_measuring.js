/**
 * 
 */

console.time('measurement'); //console.time(label)

var result = '';

for(var i=1; i<100; i++) {
	result += i + ' ';
}

console.log('Result : ', result);

console.timeEnd('measurement'); //console.timeEnd(label)


