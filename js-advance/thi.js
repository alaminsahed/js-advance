//this

// this keyword point a object

//console.log(this);

// const person = {
//     name: "sumon",
//     age: 23,
//     height: "medium",
//     iqueue: function () {
//         console.log(`${this.name} iqueue is very low`);
//     }


// }

// person.iqueue(); //sumon iqueue is very low



// const person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         iqueue: function () {
//             console.log(`${this.name} iqueue is very low`);
//         },
//         friends: {
//             name: "sumon",
//             findFriends: function () {
//                 console.log(`His friend is ${this.name}`);
//             }
//         }

//     }
// }

// var details = person("sahed", 23);
// details.iqueue();
// details.friends.findFriends();

// var iqueue = function (friendName) {
//     console.log(`${this.name} and ${friendName} iqueue is very low`);
// }

// const person = {
//     name: "sumon",
//     age: 23,
//     height: "medium",
// }

// var friendName = "sahed"
//iqueue.call(person, friendName)

// var info = iqueue.bind(person, friendName)

// info();


// var iqueue = function (...friends) {
//     console.log(friends[0]);
//     console.log(`${this.name} iqueue is very low`);
// }

// const person = {
//     name: "sumon",
//     age: 23,
//     height: "medium",
// }

// var friends = ["sahed", "suvom", "mona"]


// iqueue.apply(person, friends)




// const a = function (vari) {
//     console.log(vari);
// }

// const vari = [2, 3, 5]

// a(vari);


// function Person(name, age) {
//     //let this = object.create(null);
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name}'s age is ${this.age}`);
//     //return this
// }

// var karisma = new Person("karisma", 29)


// var profession = function () {
//     console.log(this);
// }


// profession();
