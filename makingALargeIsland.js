/*
 * You are given an 'a x n' binary matrix 'grid'. You are allowed to change at most one '0' to be 1.
 * Return the size of the largest island in 'grid' after applying this operation.
 * An island is a 4-directionally connected group of 1's.
 *
 * Example 1:
 * INPUT: grid = [[1, 0], [0, 1]]
 * OUTPUT: 3
 * EXPLANATION: Change one 0 to 1 and connect two 1s, then we get and island with area = 3.
 *
 * Example 2:
 * INPUT: grid = [[1, 1], [1, 0]]
 * OUTPUT: 4
 * EXPLANATION: Change the 0 to 1 and make the island bigger, only one island with area = 4.
 *
 * Example 3:
 * INPUT: grid = [[1, 1], [1, 1]]
 * OUTPUT: 4
 * EXPLANATION: Can't change any 0 to 1, only one island with area = 4.
 * */

function makeALargeIsland(arr) {
  // 1. check i arr is empty.
  if (arr.length < 1) return;
  // 2. var for return.
  let result = 0;

  // 3. concat.
  const concatArr = [].concat.apply([], arr);

  // sorting arr for easier output.
  const arrSort = concatArr.sort((a, b) => {
    return b - a;
  });
  // change the value to 1 if val = 0.
  for (let [idx, val] of arrSort.entries()) {
    if (val == 0) {
      arrSort[idx] = 1;
      // change only one time and break the loop.
      break;
    }
  }
  // counting for the result
  arrSort.map((a) => {
    if (a == 1) {
      result += 1;
    }
  });

  // 4. return the value.
  return result;
}

const g1 = [
  [1, 0],
  [0, 1],
];
const g2 = [
  [1, 1],
  [1, 0],
];
const g3 = [
  [1, 1],
  [1, 1],
];
const g4 = [
  [1, 0],
  [0, 0],
];

const g5 = [
  [0, 0],
  [0, 0],
];

const res1 = makeALargeIsland(g1); // 3
const res2 = makeALargeIsland(g2); // 4
const res3 = makeALargeIsland(g3); // 4
const res4 = makeALargeIsland(g4); // 2
const res5 = makeALargeIsland(g5); // 1

console.log(`INPUT: ${g1}, expected : 3, output: ${res1}`);
console.log(`INPUT: ${g2}, expected : 4, output: ${res2}`);
console.log(`INPUT: ${g3}, expected : 4, output: ${res3}`);
console.log(`INPUT: ${g4}, expected : 2, output: ${res4}`);
console.log(`INPUT: ${g5}, expected : 1, output: ${res5}`);
