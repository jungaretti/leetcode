class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var currentSum = -2_147_483_648
        var bestSum = currentSum

        for number in nums {
            // Compare extending the subarray against starting a new subarray
            currentSum = max(number, currentSum + number)
            bestSum = max(currentSum, bestSum)
        }

        return bestSum
    }
}
