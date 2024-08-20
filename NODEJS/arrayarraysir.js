const flatenArr = (arr) => {
    if (arr.length === 1) return arr;

    let len = arr.length;
    var returnArr = []
    for (let i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            returnArr = returnArr.concat(flatenArr(arr[i]))
        } else {
            returnArr.push(arr[i])
        }
    }
    return returnArr;
}
const a = [10, 35, 27, [5, 7, 9], 15, 25, [1, 0]];
const result = flatenArr(a);
console.log(result);
