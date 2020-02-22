/**
 * Return the integer value of a roman numberal.
 * @param {string} r The roman numeral to convert
 * @return {number}
 */
var romanValue = function(r) {
  switch (r) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let solution = 0;

  let previous;
  for (let roman of s) {
    if (romanValue(roman) > romanValue(previous)) {
      solution +=
        romanValue(roman) - romanValue(previous) - romanValue(previous);
    } else {
      solution += romanValue(roman);
    }

    previous = roman;
  }

  return solution;
};
