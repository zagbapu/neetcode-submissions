/*
Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) return null;
        Map<Node, Node> map =  new HashMap<>();
        dfs(node, map);

        // TODO: Implement your logic here
        return map.get(node);
    }

    private void dfs(Node node, Map<Node, Node> map) {
        if (map.containsKey(node)) return;
        Node clone = new Node(node.val, new ArrayList<>(node.neighbors.size()));
        map.put(node, clone);
        for (Node neighbour : node.neighbors){
            dfs(neighbour, map);
            clone.neighbors.add(map.get(neighbour));
        }
    }

}