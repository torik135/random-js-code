/**
 * Create callback function that is invoked synchronously for each iteration of the loop.
 */

function mapFunc(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i))
    }
    return result;
};

const arr1 = [1, 2, 3, 4, 5]

const example1 = mapFunc(arr1, n => n * 2);

console.log(example1);