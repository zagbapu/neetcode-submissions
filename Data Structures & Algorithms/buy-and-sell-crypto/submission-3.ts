class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        let minBuy = prices[0];
        let r = 1;
        for (const sell of prices) {
            const profit = sell - minBuy;
            max = Math.max(max, profit);
            minBuy = Math.min(minBuy, sell)
        }
        return max;
    }
}
