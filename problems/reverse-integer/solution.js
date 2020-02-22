/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reverse = 0;

  while (x != 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);
    if (reverse > 214748364 || (reverse === 214748364 && digit > 7)) {
      return 0;
    }
    if (reverse < -214748364 || (reverse === -214748364 && digit < -8)) {
      return 0;
    }
    reverse = reverse * 10 + digit;
  }

  return reverse;
};
