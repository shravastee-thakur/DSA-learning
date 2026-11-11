function relativeSortArray(arr1, arr2) {
  // 1. Create the VIP Logbook (Hash Map) to store everyone's rank
  let rankMap = new Map();
  for (let i = 0; i < arr2.length; i++) {
    rankMap.set(arr2[i], i);
  }

  // 2. Sort the crowd using our custom rules
  arr1.sort((a, b) => {
    // Look up both people in the logbook.
    // If they aren't in it, give them a rank of Infinity.
    let rankA = rankMap.has(a) ? rankMap.get(a) : Infinity;
    let rankB = rankMap.has(b) ? rankMap.get(b) : Infinity;

    if (rankA !== rankB) {
      // Rule 1: One person has a better VIP rank.
      // (e.g., if rankA is 0 and rankB is Infinity, 0 - Infinity is negative, so 'a' wins)
      return rankA - rankB;
    } else {
      // Rule 2: They are both "Nobodies" (rank Infinity === rank Infinity).
      // Sort them in normal ascending order.
      return a - b;
    }
  });

  return arr1;
}

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];
console.log("Test 1:", relativeSortArray(arr1, arr2));
