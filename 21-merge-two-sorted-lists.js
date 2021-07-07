// Objective: Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Comparison question, create while loop
// Loop runs as long as there's a node, each iteration compares twoavailable nodes,
// take lower one, then move that along
// So, once it's broken, remaining elements that aren't empty are added to the end.

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
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // initialize ListNode
  let newList = new ListNode(0);

  let head = { val: -1, next: null };

  // reference to head
  let headOfNewList = newList;

  // here both lists contain more elements
  while (l1 != null && l2 != null) {
    // So, If l1's value is the smaller
    if (l1.val < l2.val) {
      // Add l1's value to this new list
      newList.next = l1;
      // Now, Move l1 to its next element
      l1 = l1.next;
    } else {
      // Add l2's value to new list
      newList.next = l2;
      // Move l2 to next element
      l2 = l2.next;
    }
    // move for next iteration
    newList = newList.next;
  }
  // If run out of elements
  newList.next = l1 || l2;

  return headOfNewList.next;
};
// passed with runtime of 72ms
