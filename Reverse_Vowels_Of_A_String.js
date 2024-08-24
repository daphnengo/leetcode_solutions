/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75
 */

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function(s) {
//   // split s into an array to mutate the vowels
//   // string are immutable
//   const sArray = s.split('');
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const vowelsOfStr = [];
//   for (let i = 0; i < sArray.length; i++) {
//     if (vowels.includes(sArray[i])) {
//       // ['e', 'o'];
//       vowelsOfStr.push(sArray[i]);
//     }
//   }
//   console.log(vowelsOfStr);

//   for (let i = 0; i < sArray.length; i++) {
//     if (vowels.includes(sArray[i])) {
//       // mutate vowel in sArray by one in vowelsOfStr
//       // so we can reverse the vowels
//       sArray[i] = vowelsOfStr.pop();
//     }
//   }

//   console.log(sArray.join(''));
//   return sArray.join('');
// };

var reverseVowels = function(s) {
  // split s into an array to mutate the vowels
  // string are immutable
  const sArray = s.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // create left and right pointers
  let left = 0;
  let right = sArray.length - 1;


  while (left < right) {
    const isLeftVowel = vowels.includes(sArray[left]);
    const isRightVowel = vowels.includes(sArray[right]);

    // if both are vowels, swap
    if (isLeftVowel && isRightVowel) {
      const temp = sArray[left];
      sArray[left] = sArray[right];
      sArray[right] = temp;
      left++;
      right--;
    } else if (!isLeftVowel && !isRightVowel) {
      // if both are not vowels, move the pointers
      left++;
      right--;
    } else if (!isLeftVowel) {
      left++;
    } else {
      right--;
    }
  }

  // convert array to a string
  console.log(sArray.join(''))
  return sArray.join('');
}

reverseVowels("hEllo");
