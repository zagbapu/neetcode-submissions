class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map = {};
        let l = 0;
        let max = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++){
            map[s[r]] = (map[s[r]] || 0) + 1;
            max = Math.max(map[s[r]], max);
            while (r - l + 1 - max > k) {
                map[s[l]]--;
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
