// Question No. 1

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// Question No. 2

// let i = 0;
// while (i <= 100) {
//   let input = Number(prompt("Enter a Number"));
//   if (input > 100) {
//     break;
//   }
//   i++;
// }

// Question No. 3

// Skiped

// Question No. 4

let Array = [1, 2, 3, 4, 5];

let reverseArray = [];
for (let i = Array.length - 1; i >= 0; i--) {
  reverseArray.push(Array[i]);
}

console.log(reverseArray);

// Question No. 5

let Days = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < Days.length; i++) {
  switch (Days[i]) {
    case 1:
      console.log("Saturday");
      break;
    case 2:
      console.log("Sunday");
      break;
    case 3:
      console.log("Monday");
      break;
    case 4:
      console.log("Tuesday");
      break;
    case 5:
      console.log("Wednesday");
      break;
    case 6:
      console.log("Thursday");
      break;
    case 7:
      console.log("Friday");
      break;
    default:
      console.log("No such day for this this input");
  }
}
