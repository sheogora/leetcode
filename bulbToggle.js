"use strict"

// N light bulbs are connected by a wire. Each bulb has a switch associated with it, however due to faulty wiring, 
// a switch also changes the state of all the bulbs to the right of current bulb. Given an initial state of all bulbs,
// find the minimum number of switches you have to press to turn on all the bulbs. You can press the same switch multiple times.

function toggleLight(array) {
	var count = 0;
	console.log(array);
	for(var i = 0; i < array.length; i++) {
		if (array[i] === 0) {
			array = toggleRight(array, i);
			console.log(array);
			count ++;
		}
	}
	return count;
}

function toggleRight(array, index) {
	for (var i = index; i < array.length; i++) {
		array[i] = array[i] ^ 1;
	}
	return array;
}

console.log(toggleLight([0,1,0,1,1,0]));