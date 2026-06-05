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

        for (let i = 0; i < n - 2; i++) {
            if (nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = n - 1;
            while (l < r) {
                const target = -(nums[l] + nums[r]);
                if (target === nums[i]) {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    while(nums[l] === nums[l - 1]) l++;
                    r--;
                } else if (target > nums[i]) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return res;
    }
}
