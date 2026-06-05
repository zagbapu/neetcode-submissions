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
            if (prices[r] < prices[l]) {
                l = r;
            }
            r++;
            max = Math.max(max, profit);
        }
        return max;
    }
}
