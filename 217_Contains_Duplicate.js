/**
 * https://leetcode.com/problems/contains-duplicate/description/?envType=problem-list-v2&envId=mxjydiiv
 */

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.


// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const distinctMap = {};

  for (const num of nums) {
    if (distinctMap[num]) {
      console.log(true);
      return true;
    }

    distinctMap[num] = true;
  }

  console.log(false);
  return false;
};

containsDuplicate([1,2,3]);
