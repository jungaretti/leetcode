class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        var maxProfit = 0
        guard var minPrice = prices.first else {
            return maxProfit
        }

        // Iterate through each price, and revise maxProfit as necessary
        for price in prices {
            // We only need to update maxProfit when the element is not a min
            if price < minPrice {
                minPrice = price
            } else {
                maxProfit = max(maxProfit, price - minPrice)
            }
        }

        return maxProfit
    }
}
