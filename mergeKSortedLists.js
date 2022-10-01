/*
 * You are given an array of 'k' linked lists 'lists', each linked list is sorted in ascending oerder.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Example 1:
 * INPUT: Lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
 * OUTPUT: [1, 1, 2, 3, 4, 4, 5, 6]
 *
 * Example 2:
 * INPUT: Lists = []
 * OUTPUT: []
 *
 * Example 3:
 * INPUT: Lists = [[]]
 * OUTPUT = []
 * */

function mergeKSortedLists(arr) {
  // 1. check if arr is empty and return empty arr if empty.
  if (arr.length < 1) return (arr = []);

  // 2. merge linked-arr into one arr.
  const mergeArr = [].concat.apply([], arr);

  // 3. sort the merge arr ascending order.
  const mergeArrSort = mergeArr.sort();

  // 4. return the result.
  return mergeArrSort;
}

const ar1 = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
const ar2 = [];
const ar3 = [[]];

const res1 = mergeKSortedLists(ar1);
const res2 = mergeKSortedLists(ar2);
const res3 = mergeKSortedLists(ar3);

console.log('INPUT:', ar1, ', expected: [], OUTPUT: ', res1);
console.log('INPUT:', ar2, ', expected: [], OUTPUT: ', res2);
console.log('INPUT:', ar3, ', expected: [], OUTPUT: ', res3);
