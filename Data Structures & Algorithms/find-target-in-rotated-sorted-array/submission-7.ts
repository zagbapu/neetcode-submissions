class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {

            let m = Math.floor((l + r) / 2);
            if (nums[m] === target) return m;

            if (nums[l] <= nums[m]) {
                // Left is sorted
                if (nums[l] <= target && target <= nums[m]) {
                    // if between l and m
                    r = m - 1;
                } else {
                    // Not in sorted
                    l = m + 1;
                }
            } else {
                // right is sorted
                if (nums[m] <= target && target <= nums[r]) {
                    // if between m and r
                    l = m + 1;
                } else {
                    // Not in sorted
                    r = m - 1;
                }
            } 
        }
        return -1;
    }
}
