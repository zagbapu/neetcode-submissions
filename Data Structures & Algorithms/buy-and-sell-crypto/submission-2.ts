class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        let l = 0;
        let r = 1;
        while (r < prices.length) {
            const profit = prices[r] - prices[l];
            if (profit < 0) {
                l = r;
            }
            r++;
            max = Math.max(max, profit);
        }
        return max;
    }
}
