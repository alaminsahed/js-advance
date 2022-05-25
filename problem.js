//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// const isPrime = (num) => {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//         else {
//             return true;
//         }
//     }
// }

// console.log(isPrime(5));


//Write a JavaScript function which accepts an argument and returns the type

// const isType = (num) => {
//     return typeof (num)
// }

// console.log(isType(true));

//Returns n rows by n columns identity matrix
// function matrix(n) {

//     var i;
//     var j;

//     for (i=0; i < n; i++)
//     {
//       for (j=0; j < n; j++)
//       {
//            if (i === j)
//            {

//              console.log(' 1 ');
//            }

//            else 
//             {
//              console.log(' 0 ');}
//             }
//          console.log('----------');
//        }
//    }
// matrix(4);

//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

// const findNum = (arr) => {
//     const doSort = arr.sort((a, b) => a - b);
//     return [doSort[1], doSort[doSort.length - 2]
//     ].join()
// }

// console.log(findNum([2, 1, 4, 5]));

//Write a JavaScript function which says whether a number is perfect.

// const isPerfect = (num) => {

//     let sum = 0
//     for (let i = 0; i < num - 1; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
//     if (sum === num && (sum + num) / 2 === num) {
//         return true;
//     }
//     else {
//         return false
//     }
// }

// console.log(isPerfect(28))


// Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

// const amountTocoins = (amount, coins) => {
//     if (amount === 0) {
//         return []
//     }
//     let result = [];
//     for (let i = 0; i < coins.length; i++) {
//         if (coins[i] <= amount) {
//             let left = amount - coins[i];
//             result.push(coins[i])
//             // console.log(left, coins, coins[i])
//             amountTocoins(left, coins)

//         }
//         else {
//             coins.shift();
//             i--
//             //console.log("else", amount, coins)


//         }
//     }
//     return result

// }

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]))

// function amountToCoins(amount, coins) {
//     if (amount <= 0) {
//         return 'Please, enter amount that greater than 0';
//     }
//     var resultArr = [];
//     while (amount > 0) {
//         if (amount >= coins[0]) {
//             resultArr.push(coins[0]);
//             amount -= coins[0];
//         } else {
//             coins.shift();
//         }
//     }

//     return resultArr;
// }

// console.log(amountToCoins(46, [25, 10, 5, 2, 1]));


//JavaScript: Compute the value of bn where n is the exponent and b is the bases

// const exp = (base, num) => {
//     let sum = 1;
//     for (let i = 0; i < num; i++) {
//         sum = sum * base
//     }
//     return sum
// }

// console.log(exp(2, 3));

//Write a JavaScript function to extract unique characters from a string.
//indexOf === -1 => not found

// const unique = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         console.log(result.indexOf(str[i]));
//         if (result.indexOf(str[i]) === -1) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(unique('abccdefghijklmnopqrstuvwxyz'));

// const unique = (str) => {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] !== str[j]) {
//                 result.push(str[i])
//                 break;
//             }

//         }
//     }
//     return result;
// }

// console.log(unique('abccdefghijklmnopqrstuvwxyz'));


//Write a JavaScript function that returns array elements larger than a number. 

// const findElement = (arr, num) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(findElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

//Write a JavaScript function that generates a string id (specified length) of random characters. 

// const randomChar = (num) => {
//     const charList= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for(let i=0;i<num;i++){
//         let random = Math.floor(Math.random()*charList.length);
//         console.log(random);
//         //console.log(charList[random]);
//     }
// }

//Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

// function subset(arra, arra_size) {
//     var result_set = [],
//         result;

//     for (var x = 0; x < Math.pow(2, arra.length); x++) {
//         result = [];
//         i = arra.length - 1;
//         do {
//             if ((x & (1 << i)) !== 0) {
//                 result.push(arra[i]);
//             }
//         } while (i--);

//         if (result.length >= arra_size) {
//             result_set.push(result);
//         }
//     }

//     return result_set;
// }

// console.log(subset([1, 2, 3], 2));

// var romanToInt = function (s) {
//     const split = s.split('');
//     console.log(split);
//     let output = 0;
//     for (let elements of split) {
//         console.log(elements)
//         if (elements === "I") {
//             output += 1

//         }

//     }
//     return output
// };

// console.log(romanToInt("III"));

var mergeTwoLists = function (list1, list2) {
    const arr1 = list1
    const arr2 = list2

    const output = [...arr1, ...arr2];
    console.log(output)
    return output
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));