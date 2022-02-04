// ([2,5],[4,5],2)

function chunk(array, size) {
    const temp = [];
    for (let element of array) {
        const last = temp[temp.length - 1];
        if (!last || last.length === size) {
            temp.push([element])

        }
        else {
            last.push(element)

        }
    }
    return temp;

    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i])
    // }
}


console.log(chunk([1, 2, 3, 4], 2));