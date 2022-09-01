const arr1 = ['one', 'one', 'two', 'two', '3', 'one', 'four', 'one', 'one', 'six', 'five', 5, 3, 4, 6, 2, 2, 2, 2, 2, 'ten', 'eight'];

// return one value
function findMostCommonString(arr) {
    if (!arr.length) return;

    const newArr = [...arr]
    return newArr.sort((a, b) => newArr.filter(str => str === a).length
        - newArr.filter(str => str === b).length).pop();

}
console.log('Find most common string: ', findMostCommonString(arr1))

// return one or more value if ties
function findMostCommonStringTies(arr) {
    if (!arr.length) return;

    const newArr = [...arr];
    const countObj = {};
    newArr.forEach(element =>
        // element = key, count = value
        // if element exist then value = 1 + length else value = 1
        countObj[element] ? countObj[element] += 1 : countObj[element] = 1
    )

    const sortArr = [];
    Object.keys(countObj).forEach(key => {
        sortArr.push([key, countObj[key]])
    })

    // sort desc
    sortArr.sort((a, b) => b[1] - a[1]);
    console.log(sortArr)

    // get the first value
    const highestCount = sortArr[0][1];

    const result = sortArr.filter(ar => ar[1] === highestCount);

    const result2Arr = [];
    sortArr.forEach(ar => {
        if (ar[1] === highestCount) result2Arr.push(ar[0])
    });

    return {
        'res1': result, 'res2': result2Arr
    }
}
console.log('Find most common string with ties: ', findMostCommonStringTies(arr1))