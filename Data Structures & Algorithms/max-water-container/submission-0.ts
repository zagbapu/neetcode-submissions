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
            if (lh < rh) {
                area = lh * (r - l);
                l++;
            } else {
                area = rh * (r - l);
                r--;
            }
            max = Math.max(max, area);
        }
        return max;
    }
}
