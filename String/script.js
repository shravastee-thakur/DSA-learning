// let s = "Shravastei";

// Print each char on new line
// for (let i = 0; i < s.length; i++) {
//   //console.log(s[i]);
//   console.log(s.charAt(i));
// }

// Print in reverse order
// for (let i = s.length - 1; i >= 0; i--) {
//   //console.log(s[i]);
//   console.log(s.charAt(i));
// }

// Print reverse in one line
// let rev = "";
// for (let i = s.length - 1; i >= 0; i--) {
//   rev = rev + s.charAt(i);
// }
// console.log(rev);

// Check if string is palindrome or not

// function isPalidrome(s) {
//   let rev = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     rev = rev + s.charAt(i);
//   }
//   return rev === s;
// }

// console.log(isPalidrome("sas"));

// Two pointer method

let s = prompt("Enter a string");
let isPalindrome = true;

let i = 0,
  j = s.length - 1;
while (i < j) {
  if (s.charAt(i) != s.charAt(j)) {
    isPalindrome = false;
    break;
  }

  i++;
  j--;
}

if (isPalindrome) console.log("palindrome");
else console.log("not palindrome");
