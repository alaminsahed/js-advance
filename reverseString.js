//reverse string
// function reverse(str) {
//     const split = str.split('') //[ 'a', 'p', 'p', 'l', 'e' ]
//     const reverse = split.reverse() //[ 'e', 'l', 'p', 'p', 'a' ]
//     const reverseString = reverse.join('')
//     //const reverseString = str.split('').reverse().join('');
//     console.log(reverseString);
// }

// reverse('apple')

// function reverse(str) {
//     const split = str.split('');
//     let reverse = split.reduce((prev, next) => {
//         return prev = next + prev;
//     }, "")

//     return reverse;
// }

// reverse('apple');
// console.log(reverse('apple'));


//---------------------------------------------------
// function reverse(str) {            //first 2 letter reverse of a word
//     let reverse = '';

//     for (let i = 0; i < 2; i++) {

//         reverse = str[i] + reverse

//     }

//     const split = str.substring(2);
//     const a = reverse.concat(split)
//     console.log(a);
// }
// // a
// // pa
// // ppa
// // lppa
// // elppa

//reverse('apple')
//--------------------------------------------------------------------
// let b = 'w';
// const a = 2 + b;
// console.log(a);//2w
//---------------------------------------------------------------------
// --sentence reverse
// var reverseWords = function (s) {
//     const split = s.split(" ").reverse().join(" ").trim();
//     console.log(split);
// };

// reverseWords(" I am good   ")

//-------------------------------------------------------------------