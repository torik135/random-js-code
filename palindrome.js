function palindrome(arr){
  let arrLen = arr.length;
  if (arrLen < 2) return 'Palindrome';

  if (arr[0] !== arr[arrLen - 1]){
    return 'Not Palindrome';
  }

  return palindrome(arr.slice(1, arr.length - 1));
};

console.log(palindrome('radar'));
