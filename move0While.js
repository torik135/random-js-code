function moveZero(arr){
  let pointer = arr.length - 1;
  let i = 0;

  while(i <= pointer){
    if(arr[i] < 1){
      arr.splice(i, 1);
      arr.push(0);
      pointer--;
    };
    i++;
  };

  return arr;
};

const arr1 = [0, 1, 0, 3, 12];
const arr2 = [1, 0, 3, 12, 0, 0, 1]; // one zero did not process with this one.
console.log(moveZero(arr2));
