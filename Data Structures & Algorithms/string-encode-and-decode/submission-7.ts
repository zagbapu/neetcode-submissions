class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length == 0) {return ""}
        return strs.map(str => str.length + "#" + str ).join("");
    }

    /*
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(!str ) {return []};
        let i = 0;
        const strs = [];
        while (i < str.length){
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let strLength = Number(str.slice(i, j));
            i = j + 1;
            j = i + strLength;
            strs.push(str.slice(i, j));
            i = j;
        }

        return strs;
    }
}
