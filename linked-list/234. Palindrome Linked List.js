// Challenge https://leetcode.com/problems/palindrome-linked-list/description/
// Solution Reference https://www.youtube.com/watch?v=X2R2VZjKqi8&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=7

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const reverse = (head) => {
    let cur = head;
    let prev = null;
    let next;

    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let startPointer = head;
    let length = 0;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        length++;
    }

    let mid = reverse(slow);

    while (length) {
        length--;
        if (mid.val !== startPointer.val) {
            return false;
        }
        mid = mid.next;
        startPointer = startPointer.next;
    }

    return true;
};