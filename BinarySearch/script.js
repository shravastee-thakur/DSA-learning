let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];

let index = binarySearch(arr, 9, arr.length - 1, 125);

if (index == -1) console.log("not found");
else console.log("target found at " + index + " index");

function binarySearch(arr, first, last, target) {
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) last = mid - 2;
    else first = mid + 1;
  }

  return -1;
}
