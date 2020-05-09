/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let allRows = new Array(numRows).fill("");

  let row = 0;
  let direction = numRows > 1 ? 1 : 0;
  for (let character of s) {
    allRows[row] += character;
    if (row + direction < 0 || row + direction >= numRows) {
      direction *= -1;
    }
    row = row + direction;
  }

  return allRows.join("");
};
