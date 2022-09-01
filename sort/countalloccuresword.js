const word = 'the dog jump; while fox run. the dog jump? while fox run. the dog jump! while fox run. the dog jump, while fox.';

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

function countAllWord(str) {
    if (!str.length) return;

    const punctuation = /([.,;!?])/g;
    const space = /[\s]{2,}/g;

    const wordArr = str
        .toLowerCase()
        .replace(punctuation, '') // remove all punctuation
        .replace(space, ' ') // replace 1 space with one space
        .split(' '); // split each word with one space
    console.log(wordArr)

    const countObj = {}
    wordArr.forEach(element => {
        countObj[element] ? countObj[element] += 1 : countObj[element] = 1;
    });

    const result2 = findMostCommonStringTies(wordArr)
    const res2 = result2.res2;

    return { 'res1': countObj, 'res2': res2 };

}

console.log(countAllWord(word))