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
var addTwoNumbers = function(l1, l2) {
  // Initialize a new list
  let prehead = new ListNode(0);
  let current = prehead;

  // Initialize local trackers of the lists
  let left = l1;
  let right = l2;

  // Sum the two lists using elementary addition
  let carry = 0;
  while (left !== null || right !== null) {
    const digit = (left ? left.val : 0) + (right ? right.val : 0) + carry;
    carry = Math.floor(digit / 10);
    current.next = new ListNode(digit % 10);

    current = current.next;
    left = left ? left.next : left;
    right = right ? right.next : right;
  }
  current.next = carry ? new ListNode(carry) : null;

  return prehead.next;
};
