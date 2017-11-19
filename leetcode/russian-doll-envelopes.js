"use strict"

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
/*
complexity O(n log n)
*/

var maxEnvelopes = function(envelopes) {
	// sort based on width
	envelopes.sort(function(a,b) { return a[0]-b[0] });

	var total = 0;
	var map = [];

	for (var i = 0; i < envelopes.length; i++) {
		map[i] = 1;
		for (var j = 0; j < i; j++) {
			// if envelop fits
			if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]){
				// check what the compared envelop previous fit number was and increment for the current;
				map[i] = map[i] > map[j] + 1 ? map[i] : map[j] + 1;
			}
		}
		// record the new best
		total = map[i] > total ? map[i] : total;
    }
    return total;
};
  
console.log(maxEnvelopes([[30,50],[12,2],[3,4],[12,15]]));