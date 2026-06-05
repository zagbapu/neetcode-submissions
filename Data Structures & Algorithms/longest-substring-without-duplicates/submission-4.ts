class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set();
        let max = 0;
        let window = 0;
        for (let i = 0; i < s.length; i++) {
            if (!set.has(s[i])) {
                set.add(s[i]);
                window++;
                console.log(`Added ${s[i]}, Window: ${window}, Set: ${Array.from(set)}`);
            } else {
                let start = i - window;
                console.log(`Duplicate ${s[i]} spotted in set: ${Array.from(set)}, going back to ${s[start]}`);
                while (s[i] !== s[start]) {
                    console.log(`Deleting ${s[start]}`)
                    set.delete(s[start]);
                    start++;
                    window--;
                    console.log(`New Window: ${window}, Set: ${Array.from(set)}`);
                }
            }
            max = Math.max(max, window);
        }
        return max;
    }
}
