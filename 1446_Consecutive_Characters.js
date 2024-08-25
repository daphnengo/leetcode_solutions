/**
 * https://leetcode.com/problems/consecutive-characters/description/
 */

// The power of the string is the maximum length of a non-empty substring that contains only one unique character.
// Given a string s, return the power of s.

 
// Example 1:
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// Example 2:
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let maxCount = 1;
  let currentCount = 1;
  let char = s[0];

  for (let i = 1; i < s.length; i++) {
    if (char === s[i]) {
      currentCount++;
    } else {
      char = s[i];
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 1;
    }
  }

  maxCount = Math.max(maxCount, currentCount);

  console.log(maxCount);
  return maxCount;
};

const input = "abbcccddddeeeeedcba"
maxPower(input);
