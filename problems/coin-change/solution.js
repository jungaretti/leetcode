/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let solutions = new Array(amount + 1);
  solutions[0] = 0;

  // Iterate towards target amount, calculating coins along the way
  for (let currAmount = 1; currAmount < solutions.length; currAmount++) {
    // Calculate the minimum amount of coins needed for the current amount
    let minCoins = Number.MAX_VALUE;
    for (let coinValue of coins) {
      if (coinValue <= currAmount && solutions[currAmount - coinValue] != -1) {
        minCoins = Math.min(1 + solutions[currAmount - coinValue], minCoins);
      }
    }

    // Store the minimum amount of coins, or -1 if the amount cannot be made
    solutions[currAmount] = (minCoins < Number.MAX_VALUE ? minCoins : -1);
  }

  return solutions[amount];
};