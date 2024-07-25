/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 */
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if ((str1 + str2) !== (str2 + str1)) {
      return "";
    }

    let str1Length = str1.length;
    let str2Length = str2.length;

    while (str2Length != 0) {
      let temp = str2Length;
      console.log('temp', temp);

      console.log('str1Length % str2Length', str1Length, str2Length);
      str2Length = str1Length % str2Length;
      console.log('str2Length', str2Length);

      str1Length = temp;
      console.log('str1Length', str1Length);
    }

    console.log(str1.substring(0, str1Length));
    return str1.substring(0, str1Length);
};

gcdOfStrings("ABAB", "ABABAB");
