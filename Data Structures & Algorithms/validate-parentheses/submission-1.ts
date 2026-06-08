class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const map = { "(": ")", "{": "}", "[": "]" };
        for (let c of s) {
            if (map[c]) {
                stack.push(map[c]);
            } else {
                if (c !== stack.pop()) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
