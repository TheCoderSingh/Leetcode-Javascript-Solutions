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
    let temp = new Set();

    while(head !== null) {
        if (temp.has(head)) return true;
        
        temp.add(head);
        head = head.next;
    }

    return false;
};
