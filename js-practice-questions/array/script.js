// Question No.1

let fruits = ["Apple", "Banana", "Mango", "Watermelon", "Grapes"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Question No.2

let nums = [10, 25, 3, 47, 8];
let largest;
for (let i = 0; i < 5; i++) {
  if (nums[i] < nums[i + 1]) {
    largest = nums[i + 1];
  }
}

console.log(largest);

// Question No.3

let array = [];
let sum = 0;
// for (let i = 0; i < 5; i++) {
//     let value = Number(prompt("enter value"));
//   array.push(value);
//   sum = sum + array[i];
// }

let average = sum / array.length;

console.log(array);
console.log("The sum is: " + sum);
console.log("The Average is: " + average);

// Question No. 4

let Students = ["Arshad", "Hamza", "Saad", "Umer", "Bilal"];
let i = 0;
while (i < 5) {
  console.log(i + 1 + ") " + Students[i]);
  i++;
}

// Question No. 5
let marks = [56, 78, 45, 9, 32];
let passStudents = marks.filter((x) => {
  return x > 50;
});

console.log(passStudents);

// OR

for (let i = 0; i < marks.length; i++) {
  if (marks[i] > 50) {
    console.log(marks[i]);
  }
}
