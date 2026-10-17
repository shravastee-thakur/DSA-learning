/* Easy - 7
1. Basic Traversal + Modification (Dummy Node + Pointer Manipulation)
203. Remove Linked List Elements

2. Reverse Linked List (prev → current → next)
206. Reverse Linked List

3. Fast & Slow Pointer
876. Middle of the Linked List

4. Cycle Detection
141. Linked List Cycle
1 → 2 → 3 → 4
        ↑    ↓
        ← ← ←

5. Palindrome Linked List (Find middle -> Reverse second half -> Compare both halves)
234. Palindrome Linked List (Very important interview question.)

6. Delete Middle Node (Fast & Slow Pointer + Deletion)
2095. Delete the Middle Node

7. Intersection of Two Linked Lists (Two Pointer Switching Heads)
160. Intersection of Two Linked Lists
*/

/* Medium Linked List - 11
(1. Partial Reversal)                     
92. Reverse Linked List II ✅

(2. Fast & Slow Pointer with Gap)
19. Remove Nth Node From End of List ✅

(3. Fast Slow Pointer -> Mathematical Proof)
142. Linked List Cycle II  (Where does cycle start?) ✅

(4. Local Reversal)
24. Swap Nodes in Pairs ✅

(5. Find Middle -> Reverse Second Half -> Merge Two Lists)
143. Reorder List ✅

(6. Two Linked Lists)
86. Partition List ✅

(7. Pointer Rearrangement)
328. Odd Even Linked List ✅

(8. Reverse Linked List + Recursion)
25. Reverse Nodes in k-Group ✅

(9. Merge Sort + Linked List)
148. Sort List ✅

(10. HashMap + Pointer Manipulation)
138. Copy List With Random Pointer

(11. HashMap + Doubly Linked List)
146. LRU Cache

(Two Pointer Merge)
21. Merge Two Sorted Lists ✅
*/

// Remove Linked List Elements (203)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  let dummy = new ListNode(0);
  dummy.next = head; // [0 (dummy)] -> [6] -> [2] -> [6] -> [6] -> [3] -> null

  let curr = dummy;

  // to delete a node we always check what is front of the curr and not stand on the node which is to be deleted thus curr.next
  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next; // [0] -> [2] -> [6] -> [6] -> [3]
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
  // By returning dummy.next, we cleanly chop off the fake dummy node we added at the beginning, returning the true head of our newly cleaned list: [2] -> [3] -> null
}

// Reverse Linked List (206)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head, val) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next; // 1. Save the rest of the list
    curr.next = prev; // 2. Reverse the current node's pointer
    prev = curr; // 3. Move 'prev' one step forward
    curr = nextTemp; // 4. Move 'curr' one step forward
  }

  return prev; // 'prev' will be resting on the new head
}

// Middle of the Linked List (876)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let slow = head;
  let fast = head;

  // We must check 'fast !== null' (for even length lists)
  // AND 'fast.next !== null' (for odd length lists)
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Moves 1 step
    fast = fast.next.next; // Moves 2 steps
  }

  return slow; // When fast hits the end, slow is in the middle
}

// Linked List Cycle (141)
// 1 → 2 → 3 → 4
//         ↑    ↓
//         ← ← ←

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Palindrome Linked List (234)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  if (head === null || head.next === null) return true;

  // Step 1: Find the middle node
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // Step 3: Compare the first and second halves
  let firstHalf = head;
  let secondHalf = prev; // 'prev' is now the head of the reversed half

  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false; // Mismatch found
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true; // All nodes matched
}

// Delete the Middle Node (2095)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteMiddle(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head.next.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;

  return head;
}

// Intersection of Two Linked Lists (160)
// List A:   [a] -> [b] \
//                       -> [X] -> [Y] -> null
// List B:          [c] /
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  // If they don't intersect, they will eventually both be null at the same time.
  // If they do intersect, they will eventually equal the same node in memory.
  while (pA !== pB) {
    // If pA hits the end, redirect to headB. Otherwise, move forward.
    pA = pA === null ? headB : pA.next;

    // If pB hits the end, redirect to headA. Otherwise, move forward.
    pB = pB === null ? headA : pB.next;
  }

  // Returns the intersection node (or null if they never intersected)
  return pA;
}
//--------------------------
// MEDIUM
//--------------------------

// Reverse Linked List II (92)
// 1 -> 2 -> 3 -> 4 -> 5  with left = 2, right = 4

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // Step 1: Reach the node exactly BEFORE the 'left' position
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // Step 2: Mark our anchor points for the reconnection later
  let connection = prev; // The node right before the reversal starts
  let tail = prev.next; // The first node of the reversed section (will become the last)

  // Step 3: Standard Reversal Loop (just like LC 206)
  let revPrev = null;
  let revCurr = tail;
  for (let i = 0; i <= right - left; i++) {
    let nextTemp = revCurr.next;
    revCurr.next = revPrev;
    revPrev = revCurr;
    revCurr = nextTemp;
  }

  // Step 4: Stitch the list back together
  connection.next = revPrev;
  tail.next = revCurr;

  return dummy.next;
}

// Remove Nth Node From End of List (19)
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  // 1. Dummy node is crucial here to handle edge cases
  // (like if we need to delete the very first node in the list)
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // 2. Give 'fast' a head start of n + 1 steps to create the gap
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // 3. Move both pointers at the exact same speed
  // When 'fast' hits the end, 'slow' is exactly 1 node before the target
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // 4. Delete the target node
  slow.next = slow.next.next;

  return dummy.next;
}

// Linked List Cycle II (142)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function linkedCycle(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Phase 2: Find the entrance to the cycle
      let start = head;
      let meetingNode = slow;

      // Move both 1 step at a time until they collide
      while (start !== meetingNode) {
        start = start.next;
        meetingNode = meetingNode.next;
      }

      return start;
    }
  }

  return null;
}

// Swap Nodes in Pairs (24)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 1. Set up the Dummy Node
  let dummy = new ListNode(0);
  dummy.next = head;

  // 'prev' will always point to the node right before the pair we are swapping
  let prev = dummy;

  // 2. We only proceed if there are at least 2 nodes left to swap
  while (prev.next !== null && prev.next.next !== null) {
    // Identify the two nodes to swap
    let first = prev.next;
    let second = prev.next.next;

    // 3. The Swap (Careful pointer manipulation)
    first.next = second.next; // First node points to the rest of the list
    second.next = first; // Second node points backwards to the first
    prev.next = second; // The node before the pair points to the new front of the pair

    // 4. Move forward for the next pair
    prev = first; // 'first' is now the second node in the pair, so it becomes the new 'prev'
  }

  // dummy.next is the true new head of the list
  return dummy.next;
};

// Reorder List (143)
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  if (!head || !head.next) return;

  // Step 1: Find the middle (Fast & Slow Pointers)
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half
  let prev = null;
  let curr = slow.next; // Start reversing from the node AFTER the middle
  slow.next = null; // CRITICAL: Sever the first half from the second half

  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // Step 3: Merge the two halves
  let first = head; // Head of the first half
  let second = prev; // Head of the reversed second half

  while (second !== null) {
    // Save the next nodes before we overwrite the arrows
    // first:  1 -> 2 -> 3 -> null
    // second: 5 -> 4 -> null

    let temp1 = first.next;
    let temp2 = second.next;

    // Zip the nodes together
    first.next = second;
    second.next = temp1;

    // Move the pointers forward for the next iteration
    first = temp1;
    second = temp2;
  }
}

// Partition List (86)
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  // 1. Set up our two buckets with Dummy Nodes
  let lessDummy = new ListNode(0);
  let greaterDummy = new ListNode(0);

  // Pointers to build out our two new lists
  let less = lessDummy;
  let greater = greaterDummy;

  // 2. Iterate through the original list
  let curr = head;
  while (curr !== null) {
    if (curr.val < x) {
      // Append to the 'less' list
      less.next = curr;
      less = less.next;
    } else {
      // Append to the 'greater' list
      greater.next = curr;
      greater = greater.next;
    }
    curr = curr.next; // Move to the next node in the original list
  }

  // 3. CRITICAL STEP: Cap the end of the 'greater' list
  // If we don't do this, it might still point to a node in the 'less' list, causing a cycle!
  greater.next = null;

  // 4. Glue the two lists together
  less.next = greaterDummy.next; // Skip the greaterDummy zero node

  // Return the true head of our new combined list
  return lessDummy.next;
}

// Odd Even Linked List (328)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
  // 1. Edge case: If list is empty or has only 1 or 2 nodes, no rearrangement is needed.
  if (!head || !head.next) return head;

  // 2. Initial Setup
  let odd = head; // 1st node
  let even = head.next; // 2nd node
  let evenHead = even; // Save the start of the even track to connect later

  // 3. The Leapfrog Loop
  // We check 'even' and 'even.next' because the even pointer is always ahead of the odd pointer.
  while (even !== null && even.next !== null) {
    // Odd pointer jumps over the even node to grab the next odd node
    odd.next = even.next;
    odd = odd.next;

    // Even pointer jumps over the odd node to grab the next even node
    even.next = odd.next;
    even = even.next;
  }

  // 4. Glue the end of the odd track to the start of the even track
  odd.next = evenHead;

  // The original head is still the start of the odd track, so we return it
  return head;
}

// Reverse Nodes in k-Group (25)
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  // Step 1: The Check (Do we have k nodes?)
  let count = 0;
  let curr = head;
  while (curr !== null && count < k) {
    curr = curr.next;
    count++;
  }

  // Base case: If we don't have k nodes left, return the list as is
  if (count < k) {
    return head;
  }

  // Step 2: The Reversal (Reverse exactly k nodes)
  let prev = null;
  let current = head;
  for (let i = 0; i < k; i++) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  // Step 3: The Recurse and Stitch
  // After reversal, 'prev' is the new head of this group.
  // 'head' is the new tail.
  // 'current' is pointing to the very first node of the NEXT group.
  head.next = reverseKGroup(current, k);

  // Return the new head of this reversed group up the call stack
  return prev;
}

// 148. Sort List
/**
 Fast & Slow Pointers (to find the middle).
 Dummy Node (to safely merge lists).
 Recursion (to break the problem down).
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  // 1. Base Case: If the list is empty or has 1 node, it's already sorted!
  if (!head || !head.next) return head;

  // 2. Divide: Find the middle of the list
  // (We use head.next for fast so it stops at the end of the LEFT half)
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 'slow' is the end of the left half. Sever the connection!
  let mid = slow.next;
  slow.next = null;

  // 3. Conquer: Recursively sort both halves
  let left = sortList(head);
  let right = sortList(mid);

  // 4. Combine: Merge the two sorted halves back together
  return merge(left, right);
}

// HELPER FUNCTION: Merge Two Sorted Lists (Uses Dummy Node Pattern)
function merge(list1, list2) {
  let dummy = new ListNode(0);
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // If one list finishes before the other, just attach the rest of the remaining list
  if (list1 !== null) tail.next = list1;
  if (list2 !== null) tail.next = list2;

  return dummy.next;
}

// Merge Two Sorted Lists(21)
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  // 1. Set up the Dummy Node and our 'tail' pointer to build the new list
  let dummy = new ListNode(0);
  let tail = dummy;

  // 2. Traverse both lists as long as NEITHER is empty
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.next = list1; // Attach the smaller node
      list1 = list1.next; // Move the list1 pointer forward
    } else {
      tail.next = list2; // Attach the smaller node
      list2 = list2.next; // Move the list2 pointer forward
    }
    tail = tail.next; // Move our tail pointer forward to the new end of the chain
  }

  // 3. Attach any leftovers
  // If one list finishes early, the other list still has nodes left.
  // Since the lists are already sorted, we can just glue the entire remaining chunk on at once!
  if (list1 !== null) {
    tail.next = list1;
  } else if (list2 !== null) {
    tail.next = list2;
  }

  // Return the true head of the merged list
  return dummy.next;
}
