/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function Node(val, next) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
    let temp = new Node(0); 
    let currentNode = temp; 
    let carry =0;
    while(l1!==null||l2!==null||carry!==0){
        let sum = carry;
        if(l1!==null){
            sum+=l1.val
            l1 = l1.next;
        }
        if(l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum/10);
        currentNode.next = new Node(sum%10);
        currentNode = currentNode.next;
    }
    return temp.next; 
 };