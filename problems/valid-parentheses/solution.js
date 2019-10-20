/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Initialize some helpful resources, including a stack for symbols
  const symbolPairs = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["]
  ]);
  let symbolStack = new Array();

  // Iterate through the string, pushing to and popping from the stack
  for (const symbol of s) {
    if (symbolPairs.has(symbol)) {
      const mostRecentSymbol = symbolStack.pop();
      // If the most recent symbol is not the current's pair,
      // then the string is invalid and we should return false
      if (mostRecentSymbol !== symbolPairs.get(symbol)) {
        return false;
      }
    } else {
      symbolStack.push(symbol);
    }
  }

  return symbolStack.length === 0;
};