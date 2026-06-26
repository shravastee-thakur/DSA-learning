// Basic Traversal & Counting (Very Easy)

// 1) Find the length of a string
function findLength(str) {
  return str.length;
}

console.log(findLength("PlacementPrep")); // Output: 13

// 2) Print each character of a string

function printCharacters(str) {
  for (let char of str) {
    console.log(char);
  }
}

// printCharacters("Hi");
// Output:
// H
// i

// 3) Count vowels and consonants

function countVowelsAndConsonants(str) {
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let char of str.toLowerCase()) {
    if (/[aeiou]/.test(char)) {
      vowelsCount++;
    } else if (/[a-z]/.test(char)) {
      consonantsCount++;
    }
  }

  return { vowels: vowelsCount, consonants: consonantsCount };
}

console.log(countVowelsAndConsonants("Hello World!"));
// Output: { vowels: 3, consonants: 7 }

// 4) Count vowels, consonants, digits, and special characters

function countAllCategories(str) {
  let counts = { vowels: 0, consonants: 0, digits: 0, special: 0 };

  for (let char of str.toLowerCase()) {
    if (/[aeiou]/.test(char)) {
      counts.vowels++;
    } else if (/[a-z]/.test(char)) {
      counts.consonants++;
    } else if (/[0-9]/.test(char)) {
      counts.digits++;
    } else {
      counts.special++;
    }
  }

  return counts;
}

console.log(countAllCategories("Code 101!"));
// Output: { vowels: 2, consonants: 2, digits: 3, special: 2 }

// 5) Count words in a string

function countWords(str) {
  const trimmed = str.trim();
  if (trimmed === "") return 0;

  return trimmed.split(/\s+/).length;
}

console.log(countWords("   Keep practicing   DSA   ")); // Output: 3

// 6) Frequency of characters in a string

function getCharFrequency(str) {
  const freqMap = {};

  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  return freqMap;
}

console.log(getCharFrequency("apple")); // Output: { a: 1, p: 2, l: 1, e: 1 }

// 7) Find Most Frequent Vowel and Consonant

function maxVowelAndConsonant(str) {
  const freqMap = {};
  let maxVowel = "",
    maxConsonant = "";
  let maxVCount = 0,
    maxCCount = 0;

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      freqMap[char] = (freqMap[char] || 0) + 1;

      if (/[aeiou]/.test(char)) {
        if (freqMap[char] > maxVCount) {
          maxVCount = freqMap[char];
          maxVowel = char;
        }
      } else {
        if (freqMap[char] > maxCCount) {
          maxCCount = freqMap[char];
          maxConsonant = char;
        }
      }
    }
  }
  return { mostFrequentVowel: maxVowel, mostFrequentConsonant: maxConsonant };
}

console.log(maxVowelAndConsonant("Success"));
// Output: { mostFrequentVowel: 'e', mostFrequentConsonant: 's' }

// 8) Find the Difference
function findMultipleDifferences(s, t) {
  const freqMap = {};
  let missingChars = "";

  // 1. Tally up all the letters in the bigger string (t)
  for (let char of t) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // 2. Subtract the letters that exist in the smaller string (s)
  for (let char of s) {
    freqMap[char]--;
  }

  // 3. Whatever is left with a count > 0 is our extra letters!
  for (let char in freqMap) {
    while (freqMap[char] > 0) {
      missingChars += char;
      freqMap[char]--; // Subtract so we don't double-count
    }
  }

  return missingChars;
}

console.log(findMultipleDifferences("abcd", "abcdef")); // Output: "ef"
console.log(findMultipleDifferences("a", "aaabb")); // Output: "aabb"

// 9) Fizz Buzz (basic string manipulation)
/*
Replace any number divisible by 3 with the word "Fizz".Replace any number divisible by 5 with the word "Buzz".Replace any number divisible by both 3 and 5 (e.g., 15, 30) with the word "FizzBuzz
*/

function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let currentStr = "";

    if (i % 3 === 0) currentStr += "Fizz";
    if (i % 5 === 0) currentStr += "Buzz";

    // If currentStr is empty, just push the number as a string
    result.push(currentStr || i.toString());
  }

  return result;
}

console.log(fizzBuzz(15));
// Output includes "Fizz", "Buzz", "FizzBuzz", and numbers up to 15.

// ------- String Reversal --------

// 10) Reverse a string (Two Pointers)

function reverseString(str) {
  let arr = typeof str === "string" ? str.split("") : str;
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return typeof str === "string" ? arr.join("") : arr;
}

console.log(reverseString("interview")); // Output: "weivretni"
console.log(reverseString(["h", "e", "l", "l", "o"])); // Output: ["o","l","l","e","h"]

// 11) Reverse String II (Simulation + Two Pointers)

function reverseStr(s, k) {
  // Convert string to array to allow character swapping
  let arr = s.split("");

  // Jump 2k steps at a time
  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    // The right pointer is either i + k - 1, or the end of the string if fewer than k characters remain
    let right = Math.min(i + k - 1, arr.length - 1);

    // Perform the standard two-pointer swap for this segment
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join("");
}

console.log(reverseStr("abcdefg", 2));
// Output: "bacdfeg"
// Explanation:
// 1st block (2k = 4): "abcd" -> reverse first 2 -> "ba" + "cd"
// 2nd block: "efg" -> remaining length is 3 (which is < 2k but >= k) -> reverse first 2 -> "fe" + "g"

// 3. --------- Character Manipulation ------

// 11) Remove character

function removeCharacter(str, target) {
  return str.split(target).join("");
}

console.log(removeCharacter("banana", "a")); // Output: "bnn"

// 12) Remove duplicate characters

function removeDuplicates(str) {
  // Set automatically removes duplicates; spread operator turns it back to an array
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("programming")); // Output: "progamin"

// 13) Duplicates in the input string

function findDuplicates(str) {
  const freqMap = {};
  const duplicates = [];

  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  for (let char in freqMap) {
    if (freqMap[char] > 1) {
      duplicates.push(char);
    }
  }

  return duplicates;
}

console.log(findDuplicates("test string")); // Output: [ 't', 's', ' ' ]

// 14) Replace spaces with %20

function replaceSpaces(str) {
  return str.replaceAll(" ", "%20");
}

console.log(replaceSpaces("hello world prep")); // Output: "hello%20world%20prep"

// 15) Toggle case
function toggleCase(str) {
  let result = "";
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(toggleCase("SanFoundry 123")); // Output: "sANfOUNDRY 123"

// ------ With ASCI Characters ------

function toggleChar(s) {
  let toggle = "";

  for (let i = 0; i <= s.length; i++) {
    let ch = s.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      toggle = toggle + String.fromCharCode(ch + 32);
    } else if (ch >= 97 && ch <= 122)
      toggle = toggle + String.fromCharCode(ch - 32);
  }

  return toggle;
}

console.log(toggleChar("ShRa"));

// 16) Convert to uppercase

function toUpperCaseManual(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    // Check if character is between 'a' (97) and 'z' (122)
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i]; // Keep digits, spaces, and existing uppercase as-is
    }
  }
  return result;
}

console.log(toUpperCaseManual("placement 2026")); // Output: "PLACEMENT 2026"

// 17) Convert to lowercase

function toLowerCaseManual(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    // Check if character is between 'A' (65) and 'Z' (90)
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(toLowerCaseManual("DSA_PREP")); // Output: "dsa_prep"

// 18) Sort string of characters

function sortString(str) {
  return str.split("").sort().join("");
}

console.log(sortString("dcbaef")); // Output: "abcdef"

// 4. -------- Linear Search & Substring ------

// 19) Find first occurrence of a character
/*We use a standard Linear Search. We loop through the string one letter
 * at a time from left to right. As soon as we find a match, we immediately
 * stop the loop and return the current index.*/

function findFirstOccurrence(str, char) {
  for (let i = 0; i < str.length; i++) {
    // If the current letter matches our target, return its position
    if (str[i] === char) {
      return i;
    }
  }
  // If the loop finishes and we never found it, return -1 (standard 'not found' signal)
  return -1;
}

console.log("1. First Occurrence:", findFirstOccurrence("hello", "l")); // Output: 2

// 20) Find all occurrences of a character
/*Similar to the first problem, but instead of stopping when we find the first match, 
we keep a running list (an array) of every index where the character appears.*/

function findAllOccurrences(str, char) {
  const indices = []; // Array to store our findings

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      // Instead of returning, we push the index into our array and keep searching
      indices.push(i);
    }
  }

  return indices;
}

console.log("2. All Occurrences:", findAllOccurrences("hello", "l")); // Output: [2, 3]

// 21) Check if a substring exists
/*In modern JS, you would just use `str.includes(sub)`. But in a strict DSA interview,
 * you must build it from scratch using a "Nested Loop" or "Sliding Window".
 * We check every possible starting position in the main string. If the first letter
 * matches, we start a second loop to see if the rest of the word matches too.*/

function substringExists(str, sub) {
  // Edge case: an empty substring is technically always "found"
  if (sub.length === 0) return true;
  // Edge case: the substring can't be bigger than the main string
  if (sub.length > str.length) return false;

  // We only need to loop up to the point where the remaining letters
  // are fewer than the length of the substring we are looking for.
  for (let i = 0; i <= str.length - sub.length; i++) {
    let j = 0;

    // While the characters match, keep checking the next character in the substring
    while (j < sub.length && str[i + j] === sub[j]) {
      j++;
    }

    // If 'j' reaches the exact length of the substring, it means every letter matched!
    if (j === sub.length) {
      return true;
    }
  }

  return false;
}

console.log("3. Substring Exists:", substringExists("hello world", "world")); // Output: true

// 22) Find Words Containing Character
/* We are given an array of words. We need to check each word to see if it contains 
the target character. If it does, we record the *index of the word* in our result array.*/

function findWordsContaining(words, char) {
  const resultIndices = [];

  for (let i = 0; i < words.length; i++) {
    // Loop through the letters of the current word
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === char) {
        // If we find the letter, save the index of the word itself
        resultIndices.push(i);
        // Break out of the inner loop immediately. We already know the word
        // contains the letter, so we don't need to keep searching this specific word.
        break;
      }
    }
  }

  return resultIndices;
}

console.log("4. Words Containing:", findWordsContaining(["leet", "code"], "e")); // Output: [0, 1]

// 23) Given String is Palindrome or not

/*This uses the classic "Two Pointers (Opposite Ends)" pattern.
 * We place one pointer at the start and one at the end. They step inward, comparing
 * letters. If they ever point to different letters, it's not a palindrome.
 * If they successfully cross each other, it's a perfect palindrome!*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // If the left and right letters don't match, the mirror is broken!
    if (str[left] !== str[right]) {
      return false;
    }
    // Move both pointers one step closer to the middle
    left++;
    right--;
  }

  // If the loop finishes without returning false, it must be a palindrome
  return true;
}

console.log("5. Is Palindrome:", isPalindrome("racecar")); // Output: true
