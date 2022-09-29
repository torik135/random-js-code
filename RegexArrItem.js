/**
 * checking and filter out the char inside string in the array.
 * 
 * ex:
 * IN: ['t$$h$is', 'i$s', 'g$$r$$ea$t']
 * OUT: 'THIS IS GREAT'
 * */

function checkRegex(arr) {
  let arrIn = arr;
  // char to filter out
  const charOut = /[$]+/;
  // empty array
  let empArr = [];
  // iter arr
  for(let i  = 0; i < arrIn.length; i++){
    // aplit arr item and join the split item
    let arr2 = arrIn[i].split(charOut).join("");
    // push arr2 into empty array
    empArr.push(arr2);
  }

  // turn array into string with join and uppercase the string
  let result = empArr.join(" ").toUpperCase();
  return result;
};

const arr1 = ['t$$h$is', 'i$s', 'g$$r$$ea$t'];

console.log(checkRegex(arr1));
