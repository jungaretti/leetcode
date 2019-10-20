/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // The solution represented by its inclusive bounds
  let startIndex = 0;
  let endIndex = 0;

  // Grow a palindrome from a center...
  // (1) character, in which case subStartIndex == subEndIndex
  // (2) point, in which case subStartIndex == (subEndIndex + 1)
  const growPalindromeFrom = (subStartIndex, subEndIndex) => {
    while (subStartIndex > 0 && subEndIndex < (s.length - 1)) {
      if (s.charAt(subStartIndex - 1) == s.charAt(subEndIndex + 1)) {
        subStartIndex--;
        subEndIndex++;
      } else {
        break;
      }
    }

    // Check if a better solution has been found
    if ((subEndIndex - subStartIndex) > (endIndex - startIndex)) {
      startIndex = subStartIndex;
      endIndex = subEndIndex;
    }
  }

  // Iterate through potential center characters
  for (let charIndex = 0; charIndex < s.length; charIndex++) {
    growPalindromeFrom(charIndex, charIndex);
  }
  // Iterate through potential center inbetweens
  for (let spaceIndex = 0; spaceIndex < (s.length) - 1; spaceIndex++) {
    if (s.charAt(spaceIndex) == s.charAt(spaceIndex + 1)) {
      growPalindromeFrom(spaceIndex, spaceIndex + 1);
    }
  }

  return s.substring(startIndex, endIndex + 1);
};