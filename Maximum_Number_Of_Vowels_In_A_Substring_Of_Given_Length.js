/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75
 */
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var maxVowels = function(s, k) {
//   const vowelsList = ['a', 'e', 'i', 'o', 'u'];
//   // convert a string to an array
//   const stringArr = s.split('');
//   let maxVowelsCount = 0;

//   for (let i = 0; i < (s.length - k + 1); i++) {
//      // slice() creates a new array, don't overwrite the original array
//     const currentSubStr = stringArr.slice(i, k + i);
//     console.log(currentSubStr);

//     let vowelsCount = 0;
//     currentSubStr.forEach(char => {
//       if (vowelsList.includes(char)) {
//         vowelsCount++;
//       }
//     })

//     maxVowelsCount = Math.max(vowelsCount, maxVowelsCount);
//   }
  
//   console.log(maxVowelsCount);
//   return maxVowelsCount;
// };

var maxVowels = function(s, k) {
  const vowelsList = ['a', 'e', 'i', 'o', 'u'];
  let maxVowelsCount = 0;
  let vowelsCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowelsList.includes(s[i])) {
      vowelsCount++;
    }
  }

  maxVowelsCount = vowelsCount;

  for (let i = k; i < s.length; i++) {
    if (vowelsList.includes(s[i])) {
      vowelsCount++;
    }

    if (vowelsList.includes(s[i - k])) {
      vowelsCount--;
    }

    maxVowelsCount = Math.max(maxVowelsCount, vowelsCount);
  }

  console.log(maxVowelsCount);
  return maxVowelsCount;
};

maxVowels("abciiidef", 3);
