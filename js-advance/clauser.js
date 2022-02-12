// Closure inner function access outer function variable
// inner function access global variable
// outer function does not access inner function variable.

// function outer() {
//     const a = 10; // var. let, const all works
//     function inner() {
//         var b = 11;
//         console.log(a);
//         //return a;
//     }
//     inner();
//     console.log(b);

// }



//console.log(outer());



// function outest() {
//     const a = 10;
//     function outer() {
//         console.log("outer a", a);
//         const b = 11;
//         function inner() {
//             console.log("a", a);
//             console.log("b", b);


//         }

//         inner()
//     }
//     outer();
// }

// outest();


function outer() {
    var a = 10;
    function inner() {
        //var a = 11;
        console.log(a);
    }

    a = 11;
    inner()
}


outer();