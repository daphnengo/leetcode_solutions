/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75
 */

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

// Example 2:
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// var findDifference = function(nums1, nums2) {
//   const result1 = [];
//   const result2 = [];

//   nums1.forEach(num => {
//     if (!nums2.includes(num) && !result1.includes(num)) {
//       result1.push(num);
//     }
//   });

//   nums2.forEach(num => {
//     if (!nums1.includes(num) && !result2.includes(num)) {
//       result2.push(num);
//     }
//   });

//   console.log([result1, result2]);
//   return [result1, result2];
// };

var findDifference = function(nums1, nums2) {
  const getDistinctElements = (nums1, nums2) => {
    const existsInNums2 = new Set();
    const onlyInNums1 = new Set();

    for (const num of nums2) {
        existsInNums2.add(num);
    }

    for (const num of nums1) {
        if (!existsInNums2.has(num)) {
            onlyInNums1.add(num);
        }
    }

    // convert a set to array
    return [...onlyInNums1];
  }

  return [
    getDistinctElements(nums1, nums2),
    getDistinctElements(nums2, nums1),
  ];
};

findDifference([1,2,3], [2,4,6]);
findDifference([1,2,3,3], [1,1,2,2]);
