/**
 * https://leetcode.com/problems/valid-anagram/description/?envType=problem-list-v2&envId=mxjydiiv
 */

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word
// or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charactersMap = new Map();

  // iterate the first string and increment the count for each character
  for (let i of s) {
    charactersMap.set(i, charactersMap.get(i) + 1 || 1);
  }

  // iterate the second string
  // if the map includes the character, decrement the count for that character
  // otherwise, return false
  for (let i of t) {
    if (charactersMap.has(i)) {
      charactersMap.set(i, charactersMap.get(i) - 1);

      // when the count for that character is 0, delete it from the map
      if (charactersMap.get(i) === 0) {
        charactersMap.delete(i);
      }
      console.log(charactersMap);
    } else {
      console.log(false);
      return false;
    }
  }

  // if the size of the map is 0, return true; otherwise, false
  console.log(charactersMap.size === 0);
  return charactersMap.size === 0;
};

const s = "anagram";
const t = "nagaram";

isAnagram(s, t);
