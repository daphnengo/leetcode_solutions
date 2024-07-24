/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let maxLength = 0;

//   for(let i = 0; i < s.length; i++) {
//       const subString = [];
//       subString.push(s[i]);

//       for (let j = i + 1; j < s.length; j++) {
//         if (!subString.includes(s[j])) {
//           subString.push(s[j]);
//         } else {
//           break;
//         }
//       }

//       const subStrLength = subString.length;
//       maxLength = subStrLength > maxLength ? subStrLength : maxLength;
//   }

//   console.log(maxLength);
//   return maxLength;
// };

var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let subString = [];
  
  for (let i = 0; i < s.length; i++) {
    console.log('i', i);
    const charPosition = subString.indexOf(s[i]);

    console.log('subString', subString);
    if (charPosition !== -1) {
      subString.splice(0, charPosition + 1);
      console.log('subString after splicing', subString);
    }

    subString.push(s[i]);
    console.log('subString after pushing', subString);

    maxLength = Math.max(subString.length, maxLength);
  }

  console.log(maxLength);
  return maxLength;
};

lengthOfLongestSubstring('abcaacbb');
