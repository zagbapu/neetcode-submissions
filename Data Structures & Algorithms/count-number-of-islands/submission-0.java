class Solution {
  public int numIslands(char[][] grid) {
    int rows = grid.length;
    int cols = grid[0].length;
    int count = 0;

    for (int row = 0; row < rows; row++) {
      for (int col = 0; col < cols; col++) {
        int node = grid[row][col];
        if (node == '1') {
          // Mark as visited
          grid[row][col] = '0';

          // Run on all neighbours
          dfs(grid, row, col - 1);
          dfs(grid, row, col + 1);
          dfs(grid, row - 1, col);
          dfs(grid, row + 1, col);

          count++;
        }
      }
    }

    return count;
  }

  private void dfs(char[][] grid, int row, int col) {
    // Check out of bounds
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      return;
    }

    int node = grid[row][col];

    // Check if visited/island
    if (node == '0') {
      return;
    }

    // Mark visited
    grid[row][col] = '0';

    // Run on all neighbours
    dfs(grid, row, col - 1);
    dfs(grid, row, col + 1);
    dfs(grid, row - 1, col);
    dfs(grid, row + 1, col);
  }
}
