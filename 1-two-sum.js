// solution includes Big O notation
const twoSum = function(nums, target) {
  const result = [];

  // loop through each element & find if there's another value = target
  // target -x
  // Time complexity : O(n^2)
  // So, for each element, we want to loop through the rest of the array which takes O(n) time
  // This means the time complexity is O(n^2)
  // The space complexity is constant bc it doesn’t need any temp buffer to store this data
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
// note: improved solution - use Hash/Object in O(n) time
// under that first loop, do: numsObject[num] = i
// here, you're assigning the array a value to be the key in a key-value pair of the
// object / associative-array you can create.
// This way, the look up time is reduced = faster run time
