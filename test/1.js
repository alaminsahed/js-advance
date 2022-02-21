const CruzHarrell = require("./a.json");

const KatherineCohen = CruzHarrell.subordinates[0];
const RoxanneSimmons = CruzHarrell.subordinates[3];

// const example1 = (person) => {
//     //console.log(person)
//     //let arr = [];
//     // let find = person.subordinates.map((sub) => {
//     //     //  console.log("++", sub.name);
//     //     if (sub.subordinates) {
//     //         return sub.name
//     //     }
//     // })
//     // // console.log(arr);
//     // return find;
//     console.log(person.eyeColor);
// };

// console.log(example1(CruzHarrell));

// const exercise11 = (email) => {
//   const companyName = email.map((email)=>)
// };

// exercise11(CruzHarrell.email)

// var email = "john.doe@email.com";
// var name = email.substring(0, email.lastIndexOf("@"));
// var domain = email.substring(email.lastIndexOf("@") + 1, email.lastIndexOf("."));

// console.log(name);   // john.doe
// console.log(domain); // email.com

//console.log(CruzHarrell.eyeColor);


// const arr = [1, 2, 3];
// let arr2 = []

// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * 2)
// }
// console.log(arr2);

// let b = arr.map(ele => ele * 2)
// console.log(b);

//console.log(typeof (2.90) === "number");

// const arr = [1, 2, 3]

// const r = arr.reduce((acc, cur) => {
//     acc = acc + cur;
//     return acc;
// }, 0)

// console.log(r);



// const a = (arr, ini, func) => {
//     let v = ini;
//     for (let i = 0; i < arr.length; i++) {
//         v = func(arr[i], v)
//     }
//     return v;

// }
// function func(x, arr) {
//     console.log(arr);
//     return x = x + arr
// }
// console.log(a([1, 2, 3], 1, func));

// const exercise22 = (person) => {
//     let name = []
//     const find = person.subordinates.filter((sub) => {

//         if (sub.subordinates.length > 0) {

//             name.push(sub.name)
//         }
//     })


//     return name;

// };

// console.log(exercise22(CruzHarrell));


// "Moon Terry",
//     "Roxanne Simmons",
//     "Long Morales",
//     "Velazquez Dotson",
//     "Terri Cantrell",
//     "Janna Patterson",
//     "Angelina Walsh",
//     "Morin Howard",

// const example1 = (person) => {
//     return person.subordinates.filter((subordinate) => subordinate.subordinates ? subordinate.name : null);
// };

// console.log(example1(CruzHarrell));

const distance = (location1, location2) =>
    //console.log(location1, location2);
    Math.sqrt(
        (location1.longitude - location2.longitude) *
        (location1.longitude - location2.longitude) +
        (location1.latitude - location2.latitude) *
        (location1.latitude - location2.latitude)
    );

// const exercise52 = (maxDistance) => {
//     let count = 0;
//     const managerDistance = (person) => {
//         // let manager = { longitude: person.location.longitude, latitude: person.location.latitude };
//         //console.log(manager);
//         person.subordinates.map(sub => {
//             //console.log(person.location.longitude);

//             const locationDistance = distance({ longitude: person.location.longitude, latitude: person.location.latitude }, { longitude: sub.location.longitude, latitude: sub.location.latitude })
//             console.log(locationDistance)
//             if (locationDistance <= maxDistance) {
//                 count++;
//             }
//             managerDistance(sub);
//         })

//     }
//     managerDistance(CruzHarrell);
//     return count;
// };

// console.log(exercise52(5))

const exercise11 = (email) => {
    return email.substring(email.lastIndexOf("@") + 1, email.lastIndexOf("."))
};


const exercise53 = () => {
    let sameCompany = [];
    const findEmployee = (person) => {
        let managerCompany = exercise11(person.email);
        person.subordinates.map(sub => {
            let employeeCompany = exercise11(sub.email);

            if (managerCompany === employeeCompany) {
                let employeeName = sub.name.split(" ");
                console.log("name", sub.name)
                sameCompany.push(employeeName[0])
            }
            findEmployee(sub)
        })

    }
    findEmployee(CruzHarrell)
    return sameCompany;
};

console.log(exercise53()); 