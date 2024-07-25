/**
 * https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75
 */

// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function(nums, k) {
//   let maxAverage = 0;

//   for (let i = 0; i < nums.length - k + 1; i++) {
//     let maxSum = 0;
//     for (let j = i; j < i + k; j++) {
//       maxSum += nums[j];
//     }

//     const avg = maxSum / k;
//     maxAverage = Math.max(avg, maxAverage);
//   }

//   console.log(maxAverage);
//   return maxAverage;
// };

var findMaxAverage = function(nums, k) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  maxSum = currentSum;

  for (let j = k; j < nums.length; j++) {
    currentSum += nums[j] - nums[j - k];
    maxSum = Math.max(currentSum, maxSum);
  }

  console.log(maxSum/k);
  return (maxSum / k);
};

findMaxAverage([1,12,-5,-6,50,3], 4);
