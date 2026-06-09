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
            if (nums[l] === target) return l;
            if (nums[r] === target) return r;

            let m = Math.floor((l + r) / 2);
            if (nums[m] === target) return m;

            console.log(`l: ${nums[l]}, m: ${nums[m]}, r: ${nums[r]},`);
            if (nums[r] > nums[m]) {
                // right is sorted
                if (nums[m] < target && target < nums[r]) {
                    // if between m and r
                    l = m + 1;
                } else {
                    // Not in sorted
                    r = m - 1;
                }
            } else {
                // Left is sorted
                if (nums[l] < target && target < nums[m]) {
                    // if between l and m
                    r = m - 1;
                } else {
                    // Not in sorted
                    l = m + 1;
                }
            }
        }
        return -1;
    }
}
