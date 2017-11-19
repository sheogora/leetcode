"use strict"

/* Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

"()())()" -> ["()()()", "(())()"]
"(a)())()" -> ["(a)()()", "(a())()"]
")(" -> [""]


solution could definitely use improvement...
*/

var removeAt = (s, i) => {return s.slice(0,i) + s.slice(i+1, s.length)};
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    // go through string and push and pop parenthesis onto stack
    var stack = [];
    var last = -1;

    for (var i = 0; i < s.length; i++) {
    	var char = s[i];
    	// if top of stack has a ( and current element is ) then pop the ( off
    	if (last > -1 && stack[last].char === "(" && char === ")") {
    		stack.pop();
    		last --;
    	}
    	else if (char === "(" || char === ")") {
    		stack.push({char, i})
    		last++;
    	}
    }

    var results = new Set();
    var tempSet;
    var count = 0;
    results.add(s);

    // go through whatever is left over on the stack and apply the rules below
    for (const invalid of stack) {
    	tempSet = new Set();
		// if ) then from the index of it, remove it and then try removing all other ) to its left
		for (let item of results) {
			if (invalid.char === ")") {
			    for (var i = invalid.i-count; i > -1; i--) {
			    	if (item[i] === ")") {
			    		tempSet.add(removeAt(item, i));
			    	}
			    }
			}
			// if ( then from the index of it, remove it and then try removing all other ( to its right
			if (invalid.char === "(") {
			    for (var i = invalid.i-count; i < item.length; i++) {
			    	if (item[i] === "(") {
			    		tempSet.add(removeAt(item, i));
			    	}
			    }
			}
		}
		count++;
    	results = new Set(tempSet);
	}
	if (!results.size) return [""];

	return Array.from(results);;
};

console.log(removeInvalidParentheses(")(f"));