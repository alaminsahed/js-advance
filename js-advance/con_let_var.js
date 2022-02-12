// declaration and initialization

// updating value for global variable. global scope

//const a = 7;
//a = 8 //// const not updating value in current scope or outside. Not working
//const a = 10; //Identifier 'a' has already been declared
//console.log(a);

// const a;
// a = 7;

// console.log(a); //error


// const scope
// const a = 10;

// function useA() { //function scope
//     const i = 5;
//     console.log(a); //10
//     bc();
//     // function bc() {
//     //     console.log(i); //5
//     // }
// }

// function bc() {
//     console.log(i); //error
// }
// useA();

// {   //const for block scope
//     const a = 10;
// }

// console.log(a); //error


// let 

// redeclare and initialization of "let". Global Scope

// let a = 10;
// a = 100;
// console.log(a); //100

// let a = 10;
// let a = 100;
// console.log(a); //error


// {// block scope
//     let a = 10;
// }

// console.log(a); // error


// function unset() { // function scope
//     let a = 10;
//     b();
//     // function b() {
//     //     console.log(a);//10
//     // }
// }

// unset()



//var

// var a = 10;
// var a = 9;
// console.log(a);//9
// console.log(window)-> it saves var value in window. that's why access from anywhere.


