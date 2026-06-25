class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        int start = 0;
        int max = 0;

        // seed length = 1
        for (int i = 0; i < n; i++){
            dp[i][i] = true;
            start = i;
            max = 1;
        }

        // seed length = 2
        for (int i = 0; i < n - 1; i++){
            int j = i + 1;
            dp[i][j] = s.charAt(i) == s.charAt(j);
            if (dp[i][j]) {
                start = i;
                max = 2;
            }
        }

        for(int length = 2; length < n; length++) {
            for (int i = 0; i < n - length; i++ ){
                int j = i + length;
                if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]){
                    dp[i][j] = true;
                    start = i;
                    max = length + 1;
                } else {
                    dp[i][j] = false;
                }
            }
        }



        return s.substring(start, start + max);
    }

}
