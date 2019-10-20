/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // Initialize local trackers for iteration
  let left = l1;
  let right = l2;

  // Initialize a new linked list
  let prehead = new ListNode(0);
  let current = prehead;

  // Step through both lists
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  current.next = (left !== null ? left : right);

  return prehead.next;
};