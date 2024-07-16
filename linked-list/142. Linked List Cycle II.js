// Challenge https://leetcode.com/problems/linked-list-cycle-ii/description/
// Solution Reference
//          https://leetcode.com/problems/linked-list-cycle-ii/solutions/2459825/javascript-o-n-easy-solution-with-two-pointers/
//          https://www.youtube.com/watch?v=hZIZorVvn0M&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=3

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
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) break;
    }

    if (!fast || !fast.next) return null;

    fast = head
    while(fast !== slow) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};