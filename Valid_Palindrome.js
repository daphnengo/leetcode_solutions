/**
 * https://leetcode.com/problems/valid-palindrome/description/?envType=problem-list-v2&envId=mxjydiiv
 */

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === ' ') {
    console.log(true);
    return true;
  }
  const newS = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  console.log(newS);

  for (let i = 0; i < newS.length; i++) {
    if (newS[i] !== newS[newS.length - i - 1]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");
