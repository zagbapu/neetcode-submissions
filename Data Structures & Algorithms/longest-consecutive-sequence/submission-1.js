class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
            const set = new Set(nums);
    let max = 0;
    for (const start of set) {
      if(!set.has(start - 1)) { // Start of sequence
        let i = 1;
        while (set.has(start + i)){
          i++;
        }
        max = Math.max(max, i)

      }
      }
    return max;

    }
}
