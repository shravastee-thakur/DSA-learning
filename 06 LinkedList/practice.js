function reverseKGroup(head, k) {
  let count = 0;
  let curr = head;
  while (curr !== null && count < k) {
    curr = curr.next;
    count++;
  }

  if (count < k) {
    return head;
  }

  let prev = null;
  let current = head;
  for (let i = 0; i < k; i++) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  head.next = reverseKGroup(current, k);

  return prev;
}
