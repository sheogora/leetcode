"use strict"

var gameOfLife = function(board) {
	if (board === null || board.length === 0) return;
    var m = board.length; 
    var n = board[0].length;

	// go through board
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
			let neighbors = liveNeighbors(board, m, n, x, y);

			if (board[x][y] & 1 === 1 && (neighbors === 3 || neighbors === 2)) {
				board[x][y] = 3;
			}
			else if ((board[x][y] & 1) === 0 && neighbors === 3) {
				board[x][y] = 2;
			}
		}
	}
	// set next state
	for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            board[x][y] >>= 1;  // Get the 2nd state.
        }
    }
};

var liveNeighbors = function (board, m, n, i, j) {
    var count = 0;
    for (var x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
        for (var y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
            count += board[x][y] & 1;
        }
    }
    count -= board[i][j] & 1;
    return count;
}

gameOfLife([[1,1],[1,0]])