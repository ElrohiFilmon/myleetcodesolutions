/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    class Node{
        constructor(data,next){
        this.data = (data===undefined?0:data)
        this.next = (next===undefined?null:next)
        }
    }
    let temp = new Node();
    let currentNode = temp;
    while(list1!==null&&list2!==null){
        if(list1.val<list2.val){
            currentNode.next = list1;
            list1 = list1.next;
        }else{
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1!==null?list1:list2;
    
    return temp.next;
};