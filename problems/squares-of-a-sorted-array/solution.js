/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  // Initialize a solution array
  let squares = new Array(A.length);

  const pivot = A.findIndex(function(element) {
    return element > 0;
  });

  // Iterate "outward" from the first positive element
  let left = pivot >= 0 ? pivot - 1 : A.length - 1;
  let right = pivot >= 0 ? pivot : A.length;
  for (let i = 0; i < A.length; i++) {
    const leftVal = left >= 0 ? A[left] : Number.MAX_SAFE_INTEGER;
    const rightVal = right < A.length ? A[right] : Number.MIN_SAFE_INTEGER;
    if (Math.abs(leftVal) < Math.abs(rightVal)) {
      squares[i] = A[left] * A[left];
      left--;
    } else {
      squares[i] = A[right] * A[right];
      right++;
    }
  }

  return squares;
};
