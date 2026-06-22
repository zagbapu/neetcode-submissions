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
  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode head = new ListNode();
    ListNode child = new ListNode();
    head.next = child;
    while(list1 != null && list2 != null){
      if( (list1.val < list2.val)){
        child.next = list1;
        child = child.next;
        list1 = list1.next;
      } else {
        child.next = list2;
        child = child.next;
        list2 = list2.next;
      }
    }
    while (list1 != null) {
      child.next = list1;
      child = child.next;
      list1 = list1.next;
    }
    while (list2 != null) {
      child.next = list2;
      child = child.next;
      list2 = list2.next;
    }
    return head.next.next;

  }
}