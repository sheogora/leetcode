"use strict"
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	var bitsX = x;
	var bitsY = y;
    var count = 0;
    while (bitsX !== bitsY) {
    	if (bitsX % 2 !== bitsY % 2) {
    		count ++;
    	}
    	bitsX = bitsX >> 1;
    	bitsY = bitsY >> 1;
    }
    return count;
};

console.log(hammingDistance(1,4));