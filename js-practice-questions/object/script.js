// Question No. 1

let Myself = {
  name: "Arshad Khan",
  age: 20,
  city: "Peshawar",
  isStudent: true,
};

console.log(Myself.name);
console.log(Myself.age);
console.log(Myself.city);
console.log(Myself.isStudent);

//  Question No. 2

let car = {
  brand: "Civic",
  model: 2024,
  price: 2400000,
};

car.price = 2200000;
console.log(car.price);

// Question No. 3

let array = [
  {
    flavor: "Doodh Pathi",
    price: 200,
  },
  {
    flavor: "Adrak Chai",
    price: 100,
  },
  {
    flavor: "Qahwa",
    price: 80,
  },
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Question No. 4

let studet = {
  name: "Ali",
  marks: 82,
};

if (studet.marks > 80) {
  studet.grade = "B";
}

console.log(studet);
