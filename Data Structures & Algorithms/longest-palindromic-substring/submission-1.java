class Solution {
  public String longestPalindrome(String s) { // Bottom Up: Tabulation
    int n = s.length();
    Boolean[][] memo = new Boolean[n][n];
    int maxIdx = Integer.MIN_VALUE;
    int maxLen = 0;
    for (int start = 0; start < s.length(); start++) {
      for (int end = start; end < s.length(); end++) {
        if (isPalindrome(s, start, end, memo)) {
          if (end - start + 1 > maxLen) {
            maxIdx = start;
            maxLen = end - start + 1;
          }
        }
      }
    }
    return s.substring(maxIdx, maxIdx + maxLen);
  }

  private boolean isPalindrome(String s, int start, int end, Boolean[][] memo) {
    if (start >= end) return true;
    boolean res;
    if (memo[start][end] != null) return memo[start][end];
    if (s.charAt(start) == s.charAt(end)) {
      res = isPalindrome(s,start + 1,end - 1, memo);
    } else {
      res = false;
    }
    memo[start][end] = res;
    return res;
  }


}
