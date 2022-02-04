// function palindrome(str) {
//     const split = str.split('').reverse().join('');
//     const match = str.localeCompare(split);
//     if (match == 0) {
//         return true;
//     }
//     return false;
// }


// console.log(palindrome('bba')); //false



// function palindrome(str) {
//     const split = str.split('').reverse().join('');
//     return split === str;
// }


// console.log(palindrome('abba')); //true



// function palindrome(str) {
//     const split = str.split('');
//     const reverse = split.every((char, i) => {
//         if (char === split.length - 1) {
//             return true;
//         }
//         return false;
//     })
// }

// console.log(palindrome('abba'))


