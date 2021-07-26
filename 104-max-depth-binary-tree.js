// Challenge: https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Objective: Given the root of a binary tree, return its maximum depth.

// Note: A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.

// Solution:
const assert = require("assert");

/*
 Definition for a binary tree node.
 function TreeNode(val, left, right) {
 	this.val = (val===undefined ? 0 : val)
 	this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
  }
*/
/*
 @param {TreeNode} root
 @return {number}
*/

var maxDepth = function(root) {
  var recur = function(n) {
    // check values using strict equal
    // reach leaf, return 0
    if (!n) {
      return 0;
    }

    // look for maximum depth here
    // work your way through the nodes from root to furthest leaf in tree
    // get max of left side, then right side of tree
    var a = recur(n.left);
    var b = recur(n.right);
    // return whichever is larger, plus 1
    return a > b ? a + 1 : b + 1;
  };
  return recur(root);
};
console.log(maxDepth("1"));

const a1 = "root = [0]"; // input
const r1 = "1"; // output
const t1 = maxDepth(a1);
assert(r1);

// runtime = 86ms
