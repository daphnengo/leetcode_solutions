/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 */

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }

  // iterate the characters of the first string in the array
  for (let i = 0; i < strs[0].length; i++) {
    // check if this character is in the same position of every string
    if (!strs.every(str => str[i] === strs[0][i])) {
      // if not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }

  console.log(strs[0]);
  return strs[0];
};

longestCommonPrefix(["flower","flow","flight"]);
