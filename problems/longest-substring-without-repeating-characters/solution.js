/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // Initialize a sum and a map of characters to indicies
  let solution = 0;
  let chars = new Map();

  // Use the "sliding window" technique to find the longest valid substring
  for (let start = 0, end = 0; end < s.length; end++) {
    if (chars.has(s.charAt(end))) {
      // If the character has already been seen, then slide the window to one past it
      // Be careful of the case where a previously found character was before start
      start = Math.max(start, chars.get(s.charAt(end)) + 1);
    }
    chars.set(s.charAt(end), end);
    solution = Math.max(solution, end - start + 1);
  }

  return solution;
};
