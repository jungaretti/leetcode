/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return "";
  }

  for (let endIndex = 0; endIndex < strs[0].length; endIndex++) {
    if (
      strs.some((current) => {
        return current[endIndex] != strs[0][endIndex];
      })
    ) {
      return strs[0].substring(0, endIndex);
    }
  }
  return strs[0];
};
