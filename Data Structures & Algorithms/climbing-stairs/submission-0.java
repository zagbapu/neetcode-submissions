class Solution {
    public int climbStairs(int n) {
                if (n == 1) return 1;
        if (n == 2) return 2;

        int oneDown = 2;
        int twoDown = 1;
        int current = 0;

        for(int i = 3; i <= n; i++) {
            current = oneDown + twoDown;
            twoDown = oneDown;
            oneDown = current;
        }

        return current;

    }
}
