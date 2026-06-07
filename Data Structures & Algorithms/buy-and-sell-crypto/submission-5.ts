class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        let l = 0;
        for  (let r = 0; r < prices.length; r++) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                max = Math.max(max, profit);
            } else {
                l = r;
            }
        }
        return max;
    }
}
