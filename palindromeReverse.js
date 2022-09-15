function palindrome(arr) {
  if (arr.length < 2) return "to short!";
  
  let arrInp = arr.split("");
  let arrReverse = arr.split("").reverse();
  
  if (arrInp[0] === arrReverse[0]) return "is Palindrome";
  return "is Not Palindrome";
}

console.log("radar: ", palindrome("radar"));
console.log("bed: ", palindrome("bed"));
console.log("wing: ", palindrome("wing"));
console.log("hair: ", palindrome("hair"));
