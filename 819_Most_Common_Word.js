/**
 * https://leetcode.com/problems/most-common-word/description/
 */

// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 
// Example 1:
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// Input: paragraph = "a.", banned = []
// Output: "a"

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const wordsMap = {};
  let maxCount = 0;
  let result = '';

  const wordsArray = paragraph
    .toLowerCase()
    .split(/[^a-z]/);

  console.log(wordsArray);
  wordsArray.forEach(word => {
    if (!banned.includes(word) && word !== '') {
      if (wordsMap[word] !== undefined) {
        wordsMap[word]++;
      } else {
        wordsMap[word] = 1;
      }
    }
  });

  console.log(wordsMap);
  for (const word in wordsMap) {
    const count = wordsMap[word];
    if (count > maxCount) {
      maxCount = count;
      result = word;
    }
  }

  console.log(result);
  return result;
};

const paragraph = "..Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];

mostCommonWord(paragraph, banned);
