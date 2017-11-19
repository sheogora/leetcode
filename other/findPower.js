"use strict"

// Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as A^P 
// where P > 1 and A > 0. A and P both should be integers.

function findPower(value) {
	var base = 2;

	while (base < (value / base)) {
		var total = value;
		var count = 1;
		while (total !== base) {
			if ((total % base) > 0) {
				break;
			}
			total = total / base;
			count ++;
		}
		if (total === base) {
			return [base ,count];
		}
		base ++;
	}
	return [];
}

var power = findPower(1953125);
console.log(power[0] + "^" + power[1]);