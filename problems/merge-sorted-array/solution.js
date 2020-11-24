/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Initialize local trackers
  let baseIndex = m - 1;
  let auxIndex = n - 1;
  let mergeIndex = m + n - 1;

  // Iterate down the arrays, end to start, and merge elements
  // Stop when baseIndex or auxIndex is below zero
  while (baseIndex >= 0 && auxIndex >= 0) {
    // Grab the greatest element, and move it to mergeIndex
    if (nums1[baseIndex] > nums2[auxIndex]) {
      nums1[mergeIndex] = nums1[baseIndex];
      baseIndex--;
    } else {
      nums1[mergeIndex] = nums2[auxIndex];
      auxIndex--;
    }
    mergeIndex--;
  }

  // Perform final merge of elements into the base array
  // If the auxillary array contains the lesser elements,
  // then these must be written into the base array
  while (auxIndex >= 0) {
    nums1[auxIndex] = nums2[auxIndex];
    auxIndex--;
  }
};
