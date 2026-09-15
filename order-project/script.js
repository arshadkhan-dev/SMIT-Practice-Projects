alert("Welcome to Afridi Chai Stall!, let's take your order.");
let customer_name = prompt("What's your name?");
if (!customer_name) {
  customer_name = "Guest";
}

let flover = ["Karak", "Kashmiri", "Qahwa", "Doodh Patti", "Adrak Chai"];

let floverList = "choose a flovor by number: \n";
for (let i = 0; i < flover.length; i++) {
  floverList += i + 1 + ". " + flover[i] + "\n";
}

let floverChoice = Number(prompt(floverList));

let selectedFlavor;
if (isNaN(floverChoice)) {
  alert("That is not a number, Defaulting to Karak.");
  selectedFlavor = flover[0];
} else if (floverChoice < 1 || floverChoice > flover.length) {
  alert("That number is not in the list. Defaulting to Karak.");
  selectedFlavor = flover[0];
} else {
  selectedFlavor = flover[floverChoice - 1];
}

let sizeInput = prompt("pick a size: S, M or L").toUpperCase();
let price;
switch (sizeInput) {
  case "S":
    price = 60;
    break;
  case "M":
    price = 90;
    break;
  case "L":
    price = 120;
    break;
  default:
    alert("Unrecoginized Size, defaulting to Medium");
    sizeInput: "M";
    price = 90;
}

let cupCount = prompt("How many cups?");
if (isNaN(cupCount) || cupCount <= 0) {
  cupCount = 1;
}

let wantSuger = confirm("Would you like to add suger in your chai?");
let sugerText = wantSuger ? "yes" : "no";
let total = price * cupCount;

alert("Thank you!, your total bill is  " + total);
