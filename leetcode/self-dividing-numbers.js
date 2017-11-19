/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	var result = [];
	var add = true;
    for (var i = left; i <= right; i++) {
    	var values = valToDigitArray(i);

    	for (const val of values) {
    		if (val === 0 || i % val > 0) {
    			add = false;
    			break;
    		}
    	}

    	if (add) {
    		result.push(i);
    	}
    	add = true;
    }
   	return result;
};

var valToDigitArray = function (num) {
	var sNumber = num.toString();
	var output = new Set();

	for (var i = 0, len = sNumber.length; i < len; i += 1) {
    	output.add(+sNumber.charAt(i));
	}

	return output;
}

console.log(selfDividingNumbers(1,1000));