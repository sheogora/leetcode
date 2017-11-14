var constructMaximumBinaryTree = function(nums) {
    return construct(nums, 0, nums.length);
};

var construct = function(array, start, end) {
	if (start === end) {
		return null;
	}
	var max = highest(array, start, end);
	console.log(array[max]);
	var node = {
		val: array[max],
		left: null,
		right: null
	};

	node.left = construct(array, start, max);
	node.right = construct(array, max + 1, end);

	return node;
};

// find highest element in between given start and end point of an array
var highest = function(array, start, end) {
    var highest = start;
    for (var i = start; i < end; i++) {
        if (array[highest] < array[i])
            highest = i;
    }
    return highest;
};