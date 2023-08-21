// function reverseInt(n) {
//     const split = n.toString().split("");
//     const reverse = split.reverse().join("");
//     const reverseInt = parseInt(reverse);
//     if (n < 0) {
//         const a = -1 * reverseInt;
//         return a;
//     }

//     return reverseInt;
// }

// console.log(reverseInt(350));


function reverseInt(n) {
    const split = n.toString().split("");
    const reverse = split.reverse().join("");
    const reverseInt = parseInt(reverse);


    return reverseInt * Math.sign(n);
}

console.log(reverseInt(-350))


