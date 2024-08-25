/**
 * https://leetcode.com/problems/single-number/description/?envType=study-plan-v2&envId=leetcode-75
 */

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

 
// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   const numMap = {};

//   for (const num of nums) {
//     if (numMap[num] === undefined) {
//       numMap[num] = 1;
//     } else {
//       numMap[num]++;
//     }
//   }

//   console.log(numMap);
//   Object.entries(numMap).forEach(entry => {
//     if (entry[1] === 1) {
//       return entry[0];
//     }
//   })
// };

var singleNumber = function(nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // XOR of two equal numbers returns 0
    // a XOR a = 0
    // a XOR 0 = a
    result = result ^ nums[i];
  }
  return result;
};

singleNumber([1]);
