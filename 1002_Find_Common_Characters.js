/**
 * https://leetcode.com/problems/find-common-characters/description/
 */

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates).
// You may return the answer in any order.

 
// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const commonCharsMap = {};

  // initialize commonCharsMap by iterating the first word
  for (const char of words[0]) {
    if (Object.hasOwn(commonCharsMap, char)) {
      commonCharsMap[char]++;
    } else {
      commonCharsMap[char] = 1;
    }
  }
  // { b: 1, e: 1, l: 2, a: 1 }
  console.log(commonCharsMap);

  // Compare with the rest of the "words" array
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    const currentMap = {};

    // initialize "currentMap" for the current word
    for (const char of currentWord) {
      if (Object.hasOwn(currentMap, char)) {
        currentMap[char]++;
      } else {
        currentMap[char] = 1;
      }
    }
    // { l: 2, a: 1, b: 1, e: 1 }
    console.log(currentMap);

    // iterate the "commonCharsMap" to update the frequency
    for (const char in commonCharsMap) {
      if (currentMap[char] !== undefined) {
        const minFrequency = Math.min(currentMap[char], commonCharsMap[char]);
        commonCharsMap[char] = minFrequency;
      } else {
        commonCharsMap[char] = 0;
      }
    };
  }

  // { b: 0, e: 1, l: 2, a: 0 }
  console.log(commonCharsMap);

  // collect the common characters
  const resultArr = [];
  for (const char in commonCharsMap) {
    for (let i = 0; i < commonCharsMap[char]; i++) {
      resultArr.push(char)
    }
  }

  // [ 'e', 'l', 'l' ]
  console.log(resultArr);
  return resultArr;
};

commonChars(["bella","label","roller"]);
commonChars(["cool","lock","cook"]);
