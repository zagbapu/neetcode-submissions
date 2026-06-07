class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let tMap = {};
        let l = 0;
        let resCoords = [-1, -1];
        let minLen = Infinity;
        let sMap = {};
        for (let c of t) {
            tMap[c] = (tMap[c] || 0) + 1;
        }

        let have = 0;
        for (let r = 0; r < s.length; r++) {
            sMap[s[r]] = (sMap[s[r]] || 0) + 1;

            if (sMap[s[r]] === tMap[s[r]]) {
                have++;
            }

            while (have === Object.keys(tMap).length) {
                sMap[s[l]]--;
                let currentWindowSize = r - l + 1;
                if (currentWindowSize < minLen) {
                    minLen = currentWindowSize;
                    resCoords = [l, r];
                }

                // 2. Did dropping that character break our target requirement?
                if (sMap[s[l]] < tMap[s[l]]) {
                    have--; // The window is no longer valid!
                }

                // 3. Now it is safe to move the pointer
                l++;
            }
        }
        return s.slice(resCoords[0], resCoords[1]+1);
    }
}
