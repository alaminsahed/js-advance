//deep copy
// let a = 5;
// let b = a;
// a = 6;

// console.log(b)
// console.log(a);

//shallow copy

const a = {
    name: "John",
    address: {
        city: "New York",
    }

}

let b = { ...a, address: { ...a.address } };
b.address.city = "London";
console.log(a.address.city);// New York

// const a = {
//     en: 'Bye',
//     de: 'Tschüss'
// }
// let b = { ...a }
// b.de = 'Ciao'
// console.log(b.de) // Ciao
// console.log(a.de) // Tschüss