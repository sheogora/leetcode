/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1,s2) {
	// identify s1 characters
	var characters = [];
    for (const char of s1) {
    	 characters[char] ? characters[char]-- : characters[char] = -1;
    }

	//sliding window
	for (var left = 0, right = s1.length; right <= s2.length; right++) {
		var copy = Object.assign({}, characters);
		for (var i = left; i < right; i++) {
			copy[s2[i]] ? copy[s2[i]]++ : copy[s2[i]] = 1;
		}

		if (isZero(copy)) {
			return true;
		}
		left++; 
	}
	return false;
}

function isZero(arr) {
	var check = true;
	for (const char in arr) {
		if (arr[char] !== 0) check = false;
	}
	return check;
}

// console.log(checkInclusion("abc", "eicdabooo"));

console.log(checkInclusion("adc", "dcda"));