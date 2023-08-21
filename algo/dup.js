// Compose a Javascript function for reduce the duplicate item from the array.  var arr = ["a","a","a","b","b","c","g","e","e","k"]  //output abcgek 

// const reduceDuplicate = (arr) => {
//     let result = arr.filter((item, index) => {

//         return arr.indexOf(item) === index;

//     });
//     return result;
// }

const reduceDuplicate = (arr) => {
    let result = [...new Set(arr)];
    return result;
}



const ans = reduceDuplicate(["a", "a", "a", "b", "b", "c", "g", "e", "e", "k"]);
console.log(ans);






//Note: indexOf() method returns the index of the first occurrence of a specified value in a string. arr.indexOf(item,2) // it starts from no 2 index.

//The Set object lets you store unique values of any type, whether primitive values or object references.