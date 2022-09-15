/**
 * Move all the 0's to the end
 * Ex:
 * INPUT:  [0, 1, 0, 3, 12]
 * OUTPUT: [1, 3, 12, 0, 0]
 * */

// solution 1:
// spice only remove 0 at n
// if data = [1, 0, 0] and n = 1.
// result = 1, 0 the other 0 did not get remove.
function moveZeroSplice(arr) {
  // point to the last element
  let lastEl = arr.length - 1;

  // looping the arr
  for (let i = 0; i <= lastEl; i++) {
    // if the element is zero
    if (arr[i] == 0) {
      // swap the element position to the end
      // [arr[i], arr[lastEl]] = [arr[lastEl], arr[i]];

      // remove the forst zero
      arr.splice(i, 1);
      // push to the end
      arr.push(0);

      // decrement the pointer / move left
      lastEl--;
    }
  }

  return arr;
}

// solution 2:
function moveZeroFilter(arr){
  if (arr.length < 1) return arr;

  let arrInp = arr;
  // collecting all zeros.
  let arrZero = arrInp.filter(i => i === 0);
  // collecting other than zero.
  let arrNotZero = arrInp.filter(i => i !== 0);

  for (i of arrZero) {
    arrNotZero.push(i);
  }
  return arrNotZero;
}

const arr1 = [0, 1, 0, 3, 12];
const arr2 = [1, 0, 3, 12, 0, 0, 1]; 
const arr3 = [1, 0, 0, 3, 12, 0, 0, 0, 1]; 

console.log('solution 1:');
console.log(moveZeroSplice(arr1));
console.log(moveZeroSplice(arr2));
console.log(moveZeroSplice(arr3));
console.log('solution 2:');
console.log(moveZeroFilter(arr1));
console.log(moveZeroFilter(arr2));
console.log(moveZeroFilter(arr3));
