// Q No.1
// function to reverse a String

function reverseString(Word) {
  console.log(Word);
  let finalResult = Word.split("").reverse().join("");
  return finalResult;
}

let FinalReverseString = reverseString("Kamran");
console.log(FinalReverseString);

// Question No.2 check palendrom

let input = "madam";
let result = input.split("").reverse().join("");

if (input === result) {
  console.log("True");
} else {
  console.log("False");
}

// Question No.3

let stringInput = "JavaScript is a nice language";
let count = 0;

for (let value of stringInput) {
  if (
    value == "a" ||
    value == "e" ||
    value == "i" ||
    value == "o" ||
    value == "u"
  ) {
    count++;
  }
}

console.log(count);

// Question No.4
// Find the first Non-repeating character in a string.

function findFirstNon_repeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      console.log(str.indexOf(char));
      console.log(str.lastIndexOf(char));
      return char;
    }
  }
}

console.log(findFirstNon_repeatingChar("arshad"));

// Q No.5 Remove all duplicate characters from a string.

function removeDuplicates(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(removeDuplicates("gossaping"));

// Q No.7 Find the longest word in a sentence

function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord("I love coding in javascript"));

// Q No.8 count characters
