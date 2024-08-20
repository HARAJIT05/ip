const removeDuplicates = (arr) => {
    let len = arr.length;
    const newArr = [];
    for (let i = 0; i < len; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const a = [10, 35, 27, 10, 55, 35];
const result = removeDuplicates(a);
console.log(result);
