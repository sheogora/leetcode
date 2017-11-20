"use strict"
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;

    for(const move of moves) {
    	if (move === "U") y++;
    	else if (move === "D") y--;
    	else if (move === "L") x--;
    	else if (move === "R") x++;
    }
    if (x === 0 && y === 0) return true;
    return false;
};

console.log(judgeCircle("URRULLDDL"));