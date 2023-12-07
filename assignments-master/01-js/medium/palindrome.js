/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlpha(char) {
  let charCode = char.charCodeAt(0);
  return (
    (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  );
}

function isPalindrome(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (isAlpha(str[i])) {
      newStr += str[i];
    }
  }

  return (
    newStr.toLocaleLowerCase() ===
    Array.from(newStr.toLocaleLowerCase()).reverse().join("")
  );
}

module.exports = isPalindrome;
