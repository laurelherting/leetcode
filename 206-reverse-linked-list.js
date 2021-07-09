// Objective: Given the head of a singly linked list, reverse the list, and return the reversed list.
//

// Solution:
const assert = require("assert");

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

var reverseList = function(head) {
  if (head === null) return null;
  if (head.next === null) return head;

  var prev = head;
  var node = head.next;

  prev.next = null;
  while (node !== null) {
    // save next or lose it
    var next = node.next;
    // reverse pointer
    node.next = prev;
    // increment previous to current node
    prev = node;
    // increment node to next node or null at end of list
    node = next;
  }
  return prev;
};

const a1 = "[1,2,3,4,5]"; // input
const r1 = "[5,4,3,2,1]"; // output
const t1 = reverseList(a1);
assert.strictEqual(t1, r1, `should be ${r1}`);
// runtime = 80ms
