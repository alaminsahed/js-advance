//Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// function alphabetical(str) {
//     return str.split('').sort().join('');
// }

// console.log(alphabetical('webmaster'));


//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// const upperCase = (str) => {
//     const split = str.split(' ');
//     const result = split.map(word => { return word[0].toUpperCase() + word.slice(1) });
//     return result;
// }

// console.log(upperCase('the quick brown fox'));

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

// const longestWord = (str) => {
//     const split = str.split(' ');
//     const result = split.sort((a, b) => { return b.length - a.length });
//     return result[0];
// }

// console.log(longestWord('Web Development Tutorial'));


//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// const vowelCount = (str) => {
//     const split = str.split('');
//     const result = split.filter(char => {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             return char;
//         }
//     }).length;
//     return result;
// }

// console.log(vowelCount('The quick brown fox'));

