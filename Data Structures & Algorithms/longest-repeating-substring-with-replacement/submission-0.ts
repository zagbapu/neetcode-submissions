class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let map = {};
        let l = 0;
        let r = 0
        let max = 0;
        let mfc = 0;
        while (r < s.length) {
            if (!map[s[r]]) {
                map[s[r]] = 1;
            } else {
                map[s[r]]++;
            }

            mfc = Math.max(mfc, map[s[r]]);
            while (r - l + 1 - mfc > k) {
                map[s[l]]--;
                l++
            }
            max = Math.max(max, r - l + 1);
            r++;
        }
        return max;
    }
}
