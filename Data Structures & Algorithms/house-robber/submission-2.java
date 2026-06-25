class Solution {
    public int rob(int[] nums) {
        Map<Integer, Integer> memo = new HashMap<>();
        int n = nums.length - 1;

        return dfs(nums, n, memo );
    }

    private int dfs(int[] nums, int n, Map<Integer, Integer> memo) {
        // Base case
        if (n == 0) return nums[0];
        if (n == 1) return Math.max(nums[0],nums[1]);

        if (memo.containsKey(n)) return memo.get(n);
        int res = Math.max(dfs(nums, n - 2, memo) + nums[n], dfs(nums, n - 1, memo));
        memo.put(n, res);
        return res;
    }

}
