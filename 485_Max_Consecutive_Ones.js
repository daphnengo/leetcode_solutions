/**
 * https://leetcode.com/problems/max-consecutive-ones/description/
 */

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let maxConsecutiveOnes = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0) {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, count);
      // restart to count consecutive ones when hit 0
      count = 0;
    }

    if (i === (nums.length - 1)) {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, count);
    }
  }

  console.log(maxConsecutiveOnes);
  return maxConsecutiveOnes;
};

const input = [1,1,0,1,1,1];
findMaxConsecutiveOnes(input);
