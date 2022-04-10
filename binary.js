const binary = (arr, target) => {
    let mid = Math.floor(arr.length - 1 / 2);

    if (arr[mid] === target) {
        return mid;
    }
    else if (arr[mid] > target) {
        return binary(arr.slice(0, mid), target);
    }
    else {
        return binary(arr.slice(mid + 1), target);
    }

}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));