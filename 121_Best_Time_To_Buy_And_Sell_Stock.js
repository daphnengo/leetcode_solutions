/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=problem-list-v2&envId=mxjydiiv
 */

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and
// choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

 

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit > 0) {
//         maxProfit = Math.max(maxProfit, profit);
//       }
//     }
//   }

//   console.log(maxProfit);
//   return maxProfit;
// };

var maxProfit = function(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    const profit = sellPrice - minBuyPrice;

    console.log('sellPrice', sellPrice);
    console.log('minBuyPrice', minBuyPrice);
    console.log('profit', profit);

    maxProfit = Math.max(maxProfit, profit);
    console.log('maxProfit', maxProfit);

    if (sellPrice < minBuyPrice) {
      minBuyPrice = sellPrice;
    }
  }

  console.log(maxProfit);
  return maxProfit;
};

maxProfit([7,1,5,3,6,4]);
maxProfit([7,6,4,3,1]);
