"use strict"


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

var mergeTrees = function(t1, t2) {
	var newNode = {};
	if (t1 === null && t2 === null) return newNode;

	newNode.val = (t1=== null ? 0 : t1.val) + (t2 === null ? 0 : t2.val);

	newNode.left = mergeTrees(t1 === null ? null : t1.left, t2 === null ? null : t2.left);
	newNode.right = mergeTrees(t1 === null ? null : t1.right, t2 ===null ? null : t2.right);

	return newNode;

};