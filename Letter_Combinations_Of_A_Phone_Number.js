/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 */

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

const numbersMap = {
  '1': '',
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') {
    return [];
  }

  let resultArr = [''];

  for (let i = 0; i < digits.length; i++) {
    let letterMap = [];

    for (let j = 0; j < resultArr.length; j++) {
      for (let letter of numbersMap[digits[i]]) {
        letterMap.push(resultArr[j].concat(letter));
        console.log('letterMap', letterMap);
      }
    }

    if (i === (digits.length - 1)) {
      return letterMap;
    }

    resultArr = letterMap;
    console.log('resultArr', resultArr);
  }
};

// letterMap [ 'a' ]
// letterMap [ 'a', 'b' ]
// letterMap [ 'a', 'b', 'c' ]
// resultArr [ 'a', 'b', 'c' ]

// letterMap [ 'ad' ]
// letterMap [ 'ad', 'ae' ]
// letterMap [ 'ad', 'ae', 'af' ]
// letterMap [ 'ad', 'ae', 'af', 'bd' ]
// letterMap [ 'ad', 'ae', 'af', 'bd', 'be' ]
// letterMap [ 'ad', 'ae', 'af', 'bd', 'be', 'bf' ]
// letterMap [
//   'ad', 'ae',
//   'af', 'bd',
//   'be', 'bf',
//   'cd'
// ]
// letterMap [
//   'ad', 'ae', 'af',
//   'bd', 'be', 'bf',
//   'cd', 'ce'
// ]
// letterMap [
//   'ad', 'ae', 'af',
//   'bd', 'be', 'bf',
//   'cd', 'ce', 'cf'
// ]
letterCombinations("23");
