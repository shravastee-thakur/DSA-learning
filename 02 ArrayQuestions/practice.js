function numRescueBoats(people, limit) {
  // 1. Sort the people by weight from lightest to heaviest
  people.sort((a, b) => a - b);

  let left = 0; // The lightest person
  let right = people.length - 1; // The heaviest person
  let boats = 0;

  // Continue until everyone has been assigned a boat
  // (We use <= because if left === right, there is one person left who needs a boat)
  while (left <= right) {
    // Can the lightest and heaviest person share a boat?
    if (people[left] + people[right] <= limit) {
      left++; // Lightest person gets on the boat
      right--; // Heaviest person gets on the boat
    } else {
      // Heaviest person is too heavy to share, they must go alone
      right--;
    }

    // No matter what happened above, one boat just left the dock
    boats++;
  }

  return boats;
}

console.log(numRescueBoats([3, 2, 2, 1], 3));
