class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     *
     * sorted = [-4, -1, -1, 0, 1, 2]
     */
    threeSum(nums: number[]): number[][] {
        let n = nums.length;
        nums = nums.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) break;
            if (nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = n - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    while (nums[l] === nums[l + 1] && l < r) l++;
                    while (nums[r] === nums[r - 1] && l < r) r--;
                    l++;  
                    r--;
                }
            }
        }
        return res;
    }
}
