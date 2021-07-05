const twoSum = function(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return result;
};
console.log(twoSum([2, 7, 11, 15], 9));
// Output [ 0, 1 ]
