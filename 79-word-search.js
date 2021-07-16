// Objective: Given an m x n grid of characters board and a string word,
// return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells,
// where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.

// Solution:

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// Matrix declaration goes here
var exist = function(board, word) {
  var len1 = board.length;
  var len2 = (board[0] || []).length;
  var len3 = word.length;
  var visited = null;

  if (!len1 || !len2 || !len3) return false;

  for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len2; j++) {
      visited = Array(len1)
        .fill(0)
        // map throught the array to see if string of chars / words exists
        .map(_ => Array(len2));
      // return true if word exists in the grid.
      if (helper(board, word, i, j, 0, visited)) return true;
    }
  }

  // if it doesn't exist
  return false;
};

// Find list of possible words from letter matrix
var helper = function(board, word, m, n, k, visited) {
  if (k === word.length) return true;
  if (m < 0 || m >= board.length) return false;
  if (n < 0 || n >= board[m].length) return false;
  if (visited[m][n]) return false;
  if (board[m][n] !== word[k]) return false;

  var res = false;

  visited[m][n] = true;

  // directions
  // The word constructed from letters, sequentially
  // adjacent cells are horizontally or vertically neighboring
  res =
    helper(board, word, m - 1, n, k + 1, visited) ||
    helper(board, word, m + 1, n, k + 1, visited) ||
    helper(board, word, m, n - 1, k + 1, visited) ||
    helper(board, word, m, n + 1, k + 1, visited);

  // The same letter cell may not be used more than once
  if (!res) visited[m][n] = false;

  return res;
};
// console.log(exist);

// runtime = 84ms
