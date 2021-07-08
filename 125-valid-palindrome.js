// objective: Given a string s, determine if it is a palindrome, considering only alphanumeric
// characters and ignoring cases.

// solution:
const assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // replace all non-words
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  s = s.toLowerCase();

  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};

// console.log(isPalindrome("faster,faster, vvviiimmmm"));
const r1 = "false"; // input
const t1 = isPalindrome("faster, faster, vvviiimmmm"); // output

console.log(r1);
assert(r1, t1);
// run time: 68ms
