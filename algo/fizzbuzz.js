function fizzBuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            arr.push('fizz')
        }
        else if (i % 5 === 0) {
            arr.push('buzz')
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            arr.push('fizzbuzz')
        }
        else {

            let a = String(i)
            arr.push(a)
        }

    }
    return arr;
}

console.log(fizzBuzz(15));


// var fizzBuzz = function (n) {
//     let arr = []

//     for (let i = 1; i <= n; i++) {
//         arr.push(i.toString())
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 == 0 & arr[i] % 5 == 0) {
//             arr[i] = 'FizzBuzz'
//         }
//         if (arr[i] % 3 == 0) {
//             arr[i] = "Fizz"
//         }
//         if (arr[i] % 5 == 0) {
//             arr[i] = 'Buzz'
//         }
//     }

//     return arr
// };

// console.log(fizzBuzz(15))