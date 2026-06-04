class Solution {
    /**
     * @param {string}
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const sClean = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "");
        const sRev = sClean.split("").reverse().join("");
        return sClean === sRev;
    }
}
