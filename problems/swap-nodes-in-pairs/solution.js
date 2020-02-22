/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // Initialize a new list
  let prehead = new ListNode(0);

  // Initialize local trackers of the list
  let current = prehead;
  let next = head;

  // Step through the list and build the new list by swapping pairs
  while (next !== null && next.next !== null) {
    current.next = next.next;
    current = current.next;
    next.next = current.next;
    current.next = next;
    next = next.next;
    current = current.next;
  }
  current.next = next;

  return prehead.next;
};
