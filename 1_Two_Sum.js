/**
 * https://leetcode.com/problems/two-sum/
 */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Method 1: Nested loop ==> Time complexity: O(n2)
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j]
//         }
//     }
//   }
// };

// Method 2: HashMap
// Time complexity: O(n)
var twoSum = function(nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
      // nums: [2,7,11,15]
      // numsMap: { '2': 0, '7': 1, '11': 2, '15': 3}
      numsMap[nums[i]] = i;
  }

  console.log(numsMap);
  for (let i = 0; i < nums.length; i++) {
      const secondNum = target - nums[i];
      if (numsMap.hasOwnProperty(secondNum) && numsMap[secondNum] !== i) {
          return [i, numsMap[secondNum]]
      }
  }
};