/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();
    dfs(root, res, 0);
    return res;
  }

  private void dfs(TreeNode node, List<List<Integer>> res, int depth) {
    if (Objects.isNull(node)) return;

    if (Objects.equals(res.size(), depth)) {
      res.add(new ArrayList<>());
    }
    res.get(depth).add(node.val);
    dfs(node.left, res, depth + 1);
    dfs(node.right, res,depth + 1);
  }
}
