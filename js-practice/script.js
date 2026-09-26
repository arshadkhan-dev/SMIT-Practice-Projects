// Intermediate level Questions
// Q No.1

// let marks = [78, 92, 65, 88, 55, 73];
// let total = 0;

// for (let mark of marks) {
//   console.log(mark);
//   total = total + mark;
// }

// console.log(total);

// Q No.2

// let prices = [500, 1200, 350, 800, 150];
// let totalPrice = 0;
// for (let price of prices) {
//   totalPrice = totalPrice + price;
// }
// console.log(totalPrice);

// Q No.3

// let students = ["Ali", "Ahmad", "Sara", "Ayesha", "Hamza"];

// for (let student of students) {
//   console.log(`Hello ${student}`);
// }

// Q No.4

// let products = ["laptop", "Mouse", "Keyboard", "Monitor", "Printer"];

// let input = prompt("enter product name:");
// for (let product of products) {
//   if (input === product) {
//     console.log("Product Found");
//   }
// }

// Q No.5

// let student = {
//   name: "Ali",
//   age: 20,
//   course: "JavaScript",
//   city: "Peshawar",
// };

// for (let key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

// Q No.6

// let numbers = [12, 45, 7, 89, 23, 56];
// let largest = 0;
// for (let number of numbers) {
//   if (largest < number) {
//     largest = number;
//   }
// }

// console.log(largest);

// Challenge Tasks

// Q No.1

// attempts

// let password = "1234";
// let attempt = 1;
// let i = 2;
// while (true) {
//   let inputPassword = prompt("Enter Password");
//   if (inputPassword != password) {
//     while (attempt < 3) {
//       inputPassword = prompt(
//         "Wrong password, Enter Password  again. \n you have " +
//           i +
//           " attempts left",
//       );
//     if (inputPassword != password) {
//       attempt++;
//       i--;
//     } else if (inputPassword === password) {
//       console.log("Access Granted!");
//       break;
//     }
//   }
//   console.log("Access Locked!");
//   break;
// } else {
//     console.log("Access Granted!");
//     break;
//   }
// }

// Q No.2
// let attempt = 1;
// let secretNumber = Math.floor(Math.random() * 100) + 1;
// while (true) {
//   let number = Number(prompt("Enter a number:"));
//   if (number > secretNumber) {
//     attempt++;
//     alert("Guess too high");
//   } else if (number < secretNumber) {
//     attempt++;
//     alert("Guess too low");
//   } else if (number === secretNumber) {
//     console.log(`you guessed it in ${attempt} attempts.`);
//     alert("Correct Guess! Weldone😍");
//     break;
//   }
// }
// console.log(secretNumber);

// Q No.3
// let employees = {
//   Ali: 50000,
//   Ahmad: 65000,
//   Sara: 72000,
//   Ayesha: 58000,
// };

// for (let key in employees) {
//   console.log(`${key}: ${employees[key]}`);
// }

// Q No.4

// let cart = [
//   { name: "laptop", price: 80000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Keyboard", price: 3000 },
//   { name: "Headphones", price: 5000 },
// ];

// let totalBill = 0;

// for (let i = 0; i < cart.length; i++) {
//   totalBill = totalBill + cart[i].price;
//   console.log(cart[i].price);
// }

// console.log(totalBill);

// Q No.5

// let username = "Admin";
// let password = 12345;

// let attempt = 1;

// while (attempt <= 3) {
//   let inputUsername = prompt("enter username:");
//   let inputPassword = Number(prompt("enter password: "));
//   if (inputPassword === password && inputUsername === username) {
//     console.log("Login seccessfully!");
//     break;
//   } else {
//     console.log("Username or password is incorrect: try again!");
//     attempt++;
//   }
// }

// Q No.6

// let students = ["Ali", "Kamran"];
// console.log(students);

// let activities = ["Add a Student", "View Students", "Delete a Student", "Exit"];

// let activityList = "Enter a number: \n";

// for (let i = 0; i < activities.length; i++) {
//   activityList += i + 1 + ". " + activities[i] + "\n";
// }

// let i = 4;

// while (true) {
//   let selectedActivity = Number(prompt(activityList));

//   if (selectedActivity === 1) {
//     let newStudent = prompt("Enter a Student:");
//     students.push(newStudent);
//     alert("New Student Added");
//   } else if (selectedActivity === 2) {
//     let studentsList = "All Students List \n ";
//     for (let i = 0; i < students.length; i++) {
//       studentsList += i + 1 + ". " + students[i] + "\n";
//     }
//     alert(studentsList);
//   } else if (selectedActivity === 3) {
//     let deletedStudent = students.splice(students.length - 1, 1);
//     alert("One Student deleted successfully");
//   } else if (selectedActivity === 4) {
//     confirm("Are you sure, you want to exit?");
//     break;
//   } else {
//     alert("Wrong number entered, Try again");
//   }
// }

let students = ["Arshad", "Umar", "Ali"];

let name = prompt("Enter student name: ");

for (let stu of students) {
  if (stu == name) {
    document.write("Student find");
    break;
  } else {
    alert("Student did not find:");
    break;
  }
}
