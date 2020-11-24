/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Initialize a map to store found complements and their indicies
  let allComps = new Map();

  // Iterate through the array and see if each element's complement exists
  for (let i = 0; i < nums.length; i++) {
    if (allComps.has(nums[i])) {
      return [allComps.get(nums[i]), i];
    } else {
      const comp = target - nums[i];
      allComps.set(comp, i);
    }
  }
};
