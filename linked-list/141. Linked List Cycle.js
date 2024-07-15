// Challenge https://leetcode.com/problems/linked-list-cycle/description/
// Solution Reference https://www.youtube.com/watch?v=wDgDAOVqhhA&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=2

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) return true;
    }

    return false;
};