

// let user = {
//     name: "GFG",
//     gfg1: () => {
//         console.log("hello " + this.name); // no 'this' binding here
//     },
//     gfg2() {
//         console.log("Welcome to " + this.name); // 'this' binding works here
//     }
// };
// user.gfg1();
// //user.gfg2();


// const myFunction = () => {
//     console.log(this);
// }
// // Simple invocation
// myFunction(); // {}

// function myFunction() {
//     console.log(this);
//   }
//   // Simple invocation
//   myFunction(); //error

// console.log(this)



// const person = {
//     name: "ab",
//     age: () => {
//         console.log(toString.call(this));
//     },
//     age2: function () {
//         console.log(this);
//     }

// }

// person.age()

// function Person(age) {
//     this.age = age;
// }
// const info = new Person('23');
// console.log(info);

// const Car = (color) => {
//     this.color = color;
// };
// const redCar = new Car('red');

// const Person = (age) => {
//     this.age = age;
// }
// const info = new Person('23');
// console.log(info);

// person()
// function person() {
//     console.log("hello");
// }

// person();

// let person = () => {
//     console.log('hello');
// }

// const person = (a) => (a * a);
// console.log(person(2));

// function person(a) { a * a}

// console.log(person(2));