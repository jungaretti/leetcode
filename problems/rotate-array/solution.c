void rotate(int *nums, int numsSize, int k) {
  k = k % numsSize;

  // Guard against no-shift
  if (k == 0) {
    return;
  }

  int pushCount = 0;
  int currentIndex;
  int previousValue;
  // We use this for loop to guard against push cycles
  for (int baseIndex = 0; pushCount < numsSize; baseIndex++) {
    currentIndex = (baseIndex + k) % numsSize;
    previousValue = nums[baseIndex];
    // Push elements through the array to their final locations
    while (currentIndex != baseIndex) {
      // Store the existing element
      int temp = nums[currentIndex];
      // Push the previous value to the current position
      nums[currentIndex] = previousValue;
      // Store the destroyed element
      previousValue = temp;

      currentIndex = (currentIndex + k) % numsSize;
      pushCount++;
    }
    nums[currentIndex] = previousValue;
    pushCount++;
  }
}