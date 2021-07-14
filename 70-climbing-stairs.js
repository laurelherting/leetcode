// Objective: You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

// Solution:
// uses fibonacci sequence
const assert = require("assert");

/**
 * @param {number} n
 * @return {number}
 */

// First, I'll build a tree - whiteboarding
// three step staircase, determine how many unique ways to get to top

// In this problem, we can either take 1 step or 2 steps. If we take 1 step,
// we will have to climb 3 more steps. If we take 2 steps, we will have 2 steps left.
// So, I'll need to add branches until I get to the base cases:
// 0 steps = how many ways to climb? One way, don't climb
// 1 step = how many ways to climb? One way, one step at a time
// how many ways to get to each step?
// then, add these ways together, total: 5 ways to climb 4-step stairwell

var climbStairs = function(n) {
  // base cases
  if (n == 1 || n == 0) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

const a1 = "n = 3"; // input
const r1 = "2"; // output
const t1 = climbStairs(a1);
assert(r1);
// runtime = 65ms
