// Problem 1: Reverse a String
function reverseString(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
// console.log(reverseString("shrabon"));

// Problem 2: Count Vowels in a String
function vowelsCount(str) {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
// console.log(vowelsCount("programming"));

// Problem 3: Check for Palindrome
function isPlaneDrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// console.log(isPlaneDrome("srabon"));
// console.log(isPlaneDrome("madam"))

// Problem 4: Find the Maximum Number

function findMaxnumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(findMaxnumber([1, 2, 3, 4, , 7, 5]));

