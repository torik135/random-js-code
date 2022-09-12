/**
 * Move all the 0's to the end
 * Ex:
 * INPUT:  [0, 1, 0, 3, 12]
 * OUTPUT: [1, 3, 12, 0, 0]
 * */

function moveZero(arr) {
  // point to the last element
  let lastEl = arr.length - 1;

  // looping the arr
  for (let i = 0; i <= lastEl; i++) {
    // if the element is zero
    if (arr[i] == 0) {
      // swap the element position to the end
      // [arr[i], arr[lastEl]] = [arr[lastEl], arr[i]];

      // remove zero at i
      arr.splice(i, 1);
      // push to the end
      arr.push(0);

      // decrement the pointer / move left
      lastEl--;
    }
  }

  return arr;
}

const numEl1 = [0, 1, 0, 3, 12];

const moveToEnd = moveZero(numEl1);

console.log(moveToEnd);
