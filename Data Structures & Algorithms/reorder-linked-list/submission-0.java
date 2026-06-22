/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public void reorderList(ListNode head) {
        // TODO: Implement your logic here
        if (head.next == null) return;
        ListNode slow = head;
        ListNode fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Now slow should be at the middle
        ListNode current = slow.next;
        slow.next = null;
        ListNode prev = null;
        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Now merge the two together from head to prev
        ListNode left = head;
        ListNode right = prev;
        while (right != null) {
            ListNode tempL = left.next;
            ListNode tempR = right.next;
            left.next = right;
            right.next = tempL;
            left = tempL;
            right = tempR;
        }
    }

}
