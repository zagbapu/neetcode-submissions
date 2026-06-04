class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    const map = new Map();
    let max = 0;
    for (const num of nums) {
      if(!map.has(num)) {
        let left = map.get(num - 1) || 0;
        let right = map.get(num + 1) || 0;

        let sum = left + right + 1;

        map.set(num, sum);
        map.set(num-left, sum);
        map.set(num+right, sum);

        max = Math.max(max, sum)
      }
    }

    return max;

    }
}
