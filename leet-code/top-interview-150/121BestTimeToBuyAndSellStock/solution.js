/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        minPrice = minPrice < prices[i] ? minPrice : prices[i];
        profit = prices[i] - minPrice;
        maxProfit = maxProfit > profit ? maxProfit : profit;
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0


// Такой подход показал себя несколько медленным, поэтому я внес небольшие изменения
// function maxProfit(prices) {
//     let profit = 0;
//     let maxProfit = 0;
//     let minPrice = prices[0];
//
//     for (let price of prices) {
//         minPrice = Math.min(minPrice, price);
//         maxProfit = Math.max(maxProfit, price - minPrice);
//     }
//
//     return maxProfit;
// }