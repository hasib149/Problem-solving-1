// Problem 1: Reverse a String
function reverseString(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseString("shrabon"));

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
console.log(vowelsCount("programming"));

