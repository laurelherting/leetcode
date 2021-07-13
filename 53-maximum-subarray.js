// Objective: Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// Solution:
const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = nums[0];
  var lastSavedList = [];

  for (var i = 0; i < nums.length; i++) {
    var sumNumber = 0;
    // Compare previous contiguous sum with current number and tell value
    for (var j = i; j < nums.length; j++) {
      sumNumber += nums[j];
      // Now, check to see if the current prev is the greatest sum
      if (max < sumNumber) {
        lastSavedList = [i, j];
        max = sumNumber;
      }
    }
  }
  console.log(lastSavedList);
  return max;
};

const a1 = "nums = [5,4,-1,7,8]"; // input
const r1 = "23"; // output
const t1 = maxSubArray(a1);
assert(r1);
// runtime = 111ms
