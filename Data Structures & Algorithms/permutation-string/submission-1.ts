export class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    let have = 0;
    let l = 0;
    const s1Map = {};
    for (let c of s1) {
      s1Map[c] = (s1Map[c] || 0) + 1;
    }
    const need = Object.keys(s1Map).length;
    const s2Map = {};
    for (let r = 0; r < s2.length; r++) {
      s2Map[s2[r]] = (s2Map[s2[r]] || 0) + 1;

      if (s2Map[s2[r]] === s1Map[s2[r]]) {
        have++;
      }

      while (have === need) {
        let window = r - l + 1;
        if (window === s1.length) {
          return true;
        }

        s2Map[s2[l]]--;
        if (s1Map[s2[l]] && s2Map[s2[l]] < s1Map[s2[l]]) {
          have--; // The window breaks!
        }

        l++;
      }
    }
    return false;
  }
}