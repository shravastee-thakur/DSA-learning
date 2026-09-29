// 1 -> 4 -> 3 -> 2 -> 5 -> 2 -> null
/*

0 -> 1 -> 2 -> 2
0 -> 4 -> 3 -> 5 -> null


*/
function partition(head, x) {
  let lesserDummy = new ListNode(0)
  let greaterDummy = new ListNode(0)

  let less = lesserDummy
  let greater = greaterDummy

  let curr = head
  while(curr !== null){
    if(curr.val < x){
        less.next = curr
        less = less.next
    }else{
        greater.next = curr
        greater = greater.next
    }

    curr = curr.next
    greater.next = null
    less.next = greaterDummy.next
  }
}
