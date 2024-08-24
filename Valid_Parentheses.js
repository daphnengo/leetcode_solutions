/**
 * https://leetcode.com/problems/valid-parentheses/description/?envType=problem-list-v2&envId=mxjydiiv
 */

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parenthesesArr = [];

  for (parenthese of s) {
    if (parenthese === '('
      || parenthese === '['
      || parenthese === '{'
    ) {
      parenthesesArr.push(parenthese);
      console.log(parenthesesArr);
    } else if (parenthese === ')' && parenthesesArr.pop() !== '(') {
        console.log(false);
        return false;
    } else if (parenthese === ']' && parenthesesArr.pop() !== '[') {
      console.log(false);
      return false;
    } else if (parenthese === '}' && parenthesesArr.pop() !== '{') {
      console.log(false);
      return false;
    }
  }

  if (parenthesesArr.length === 0) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

const input = "()[{}]{}";
isValid(input);
