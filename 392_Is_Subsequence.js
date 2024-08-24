/**
 * https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
 */

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) {
    return false;
  } else if (s.length === 0) {
    return true;
  }

  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
    // check every character in s
    if (s[sIndex] === t[i]) {
      sIndex++;
    }
  }

  console.log('sIndex', sIndex);
  console.log(sIndex === s.length);
  return sIndex === s.length;
};

isSubsequence("abc", "ahbgdc");
