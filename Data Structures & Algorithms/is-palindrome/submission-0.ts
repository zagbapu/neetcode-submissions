class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const sClean = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "");
        console.log(sClean);
        const sRev = sClean.split("").reverse().join("");
        console.log(sRev)
        return sClean === sRev;
    }
}
