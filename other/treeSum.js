// given a tree find sum of tree

var treeSum = function(tree){
	var sum = 0;
	return nodeSum(tree, sum);
}

var nodeSum = function(node, sum) {
	sum = node.val + (node.left ? nodeSum(node.left, sum) : 0) + (node.right ? nodeSum(node.right, sum) : 0);
	console.log(sum);
	return sum;
}

var left = {val: 5, left: {val: 5}};
var right = {val: 5};
var tree = {};
tree.val = 5;
tree.left = left;
tree.right = right;

console.log(treeSum(tree));