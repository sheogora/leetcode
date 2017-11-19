"use strict"

// Write a function that takes an unsigned integer and returns the number of 1 bits it has.
// O(B)

// using string, less efficient
function countBits(variable) {
	var bits = Number(variable).toString(2);
	var count = 0;
	for (const bit of bits) {
		if (bit === "1") {
			count ++;
		}
	}
	return count;
}


// using bit manipulation, keeps going untill 0 bits. 
function countBitsV2(variable) {
	var bits = variable;
	var count = 0;
	while (bits !== 0) {
		if (bits % 2 === 1) {
			count ++;
		}
		bits = bits >> 1;
	}
	return count;
}


console.log(countBitsV2(3435));