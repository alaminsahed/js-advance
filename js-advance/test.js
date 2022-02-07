// let a = { b: "hey" };

// let c;

// // c = { ...a };

// // console.log(c === a);//false

// c = a

// a.b = "hello"

// console.log(c.b); // hello

// // shallow copying object


function b(...args) {
    console.log(typeof args); //object 
}

b(21);