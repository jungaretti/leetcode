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
var reverseList = function (head) {
  // Lists with length 0 or 1 do not need to be reversed
  if (head == null || head.next == null) {
    return head;
  }

  // Initialize local trackers for iteration
  let previous = head;
  let current = head.next;

  // Set the tail's next to null
  previous.next = null;

  // Iterate through the linked list and reverse it
  while (current != null) {
    const next = current.next;
    current.next = previous;

    // Step through the list
    previous = current;
    current = next;
  }

  return previous;
};
