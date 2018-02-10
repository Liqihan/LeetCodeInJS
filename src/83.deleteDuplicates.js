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
var deleteDuplicates = function(head) {
    if (!(head instanceof ListNode)) {
        return [];
    }
    var cur = head;
    while (cur.next !== null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var node1 = new ListNode(1);
var node2 = new ListNode(1);
var node3 = new ListNode(2);
var node4 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(deleteDuplicates(node1));