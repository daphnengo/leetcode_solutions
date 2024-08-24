/**
 * https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75
 */
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const occurrencesMap = {};
  let isUniqueOccurrences = true;

  arr.forEach(num => {
    if (occurrencesMap[num] === undefined) {
      occurrencesMap[num] = 1;
    } else {
      occurrencesMap[num]++;
    }
  });

  // occurrencesMap = {'1': 3, '2': 2, '3': 1}
  // countsArray = [3, 2, 1];
  const countsArray = Object.values(occurrencesMap);
  const frequencyArr = [];

  console.log(countsArray);
  countsArray.forEach(count => {
    if (frequencyArr.includes(count)) {
      isUniqueOccurrences = false;
    } else {
      frequencyArr.push(count);
    }
  });

  console.log(isUniqueOccurrences);
  return isUniqueOccurrences;
};

uniqueOccurrences([1,2,2,1,1,3]);
