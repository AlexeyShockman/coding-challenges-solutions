/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let totalProfit = 0;

    for (let i = 0; i < prices.length-1; i++) {
        if (prices[i] < prices[i+1]) {
            totalProfit += prices[i+1] - prices[i];
        }
    }

    return totalProfit;
}

console.log(maxProfit([7,1,5,3,6,4])); // expected 7