class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0;
        let area = 0;
        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            let lh = heights[l];
            let rh = heights[r];
            const area = Math.min(lh, rh) * (r - l);
            max = Math.max(max, area);
            if (lh < rh) {
                while (l < r && heights[l] <= lh) {
                    l++;
                }
            } else {
                while (l < r && heights[r] <= rh) {
                    r--;
                }
            }
        }
        return max;
    }
}
