// Compose a Javascript function for sorting with this string.   Sample String :  var str = "qazxswedcvfrtgbnhyujmkliop" // output A B C D E F G H I J K L M N O P Q R S T U V W X Y Z  


const sorting = (str) => {
    let arr = str.split('');
    let sorted = arr.sort();
    let result = sorted.join(' ');
    return result.toUpperCase();
}

const ans = sorting("qazxswedcvfrtgbnhyujmkliop");
console.log(ans);