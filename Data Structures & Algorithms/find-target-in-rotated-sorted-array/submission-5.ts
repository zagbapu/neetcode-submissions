class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[l] < nums[r]) break;
            let m = Math.floor((l + r) / 2);
            console.log(`l: ${nums[l]}, m: ${nums[m]}, r: ${nums[r]},`);
            if (nums[m] > nums[r]) {
                l = m + 1;
                console.log(`New l: ${nums[l]}`);
            } else {
                r = m;
                console.log(`New r: ${nums[r]}`);
            }
        }

        let pivot = l;
         l = 0;
         r = nums.length - 1;

        console.log(`Pivot: ${nums[pivot]}`);

        if (target > nums[r]) {
            console.log(`Checking 1st half`);

            return this.bSearch(nums, 0, pivot - 1, target);
        } else {
            console.log(`Checking 2nd half`);

            return this.bSearch(nums, pivot, nums.length - 1, target);
        }
    }

    bSearch(nums: number[], l: number, r: number, target: number) {
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] === target) return m;
            if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return -1;
    }
}
