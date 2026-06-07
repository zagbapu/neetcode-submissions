class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let map = {};
        let l = 0;
        let res = 0;
        for (let r = 0; r < s.length; r++ ){
        map[s[r]] = (map[s[r]] || 0) + 1;
        while(map[s[r]] > 1){
            map[s[l]]--;
            l++;
        }
        res = Math.max(res, r - l + 1)
        }
        return res
    }
}
