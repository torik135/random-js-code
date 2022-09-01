const arr1 = ['aa', 'cc', 'bb', 'aa', 'cc'];
const arr2 = ['aa', 'cc', 1, 10, 111, 'bb', 'aa', 'cc', 1, 3, 2, 1000, 101];

function stringSort(arr) {
    if (!arr.length) return;
    const newArr = [...arr];
    return newArr.sort();
}
console.log(stringSort(arr1));
console.log(stringSort(arr2));

function numberSortAsc(arr) {
    if (!arr.length) return;
    const newArr = [...arr];
    return newArr.sort((a, b) => a - b);
}
console.log(numberSortAsc(arr1));
console.log(numberSortAsc(arr2));

function numberSortDesc(arr) {
    if (!arr.length) return;
    const newArr = [...arr];
    return newArr.sort((a, b) => a - b).reverse();
}
console.log(numberSortDesc(arr1));
console.log(numberSortDesc(arr2));

function numAndStringSort(arr) {
    if (!arr.length) return;
    const numArr = [];
    const strArr = [];
    const newArr = [...arr];
    // if element is NaN element is string else element is integer
    newArr.forEach(element => {
        isNaN(element) ? strArr.push(element) : numArr.push(element);
    });

    numArr.sort((a, b) => a - b);
    strArr.sort();
    return [...strArr, ...numArr];
}
console.log(numAndStringSort(arr1));
console.log(numAndStringSort(arr2));