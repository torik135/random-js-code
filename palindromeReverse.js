function palindrome(arr) {
  if (arr.length < 2) return "to short!";

  let arrInp = arr.trim().replace(" ", "");
  let arrReverse = arr.split("").reverse().join("").trim().replace(" ", "");

  if (arrInp === arrReverse) return "is Palindrome";
  return "is Not Palindrome";
}

console.log("radar: ", palindrome("radar"));
console.log("bed: ", palindrome("bed"));
console.log("wing: ", palindrome("wing"));
console.log("hair: ", palindrome("hair"));
console.log("bob: ", palindrome("bob"));
console.log("bob: ", palindrome("bob"));
console.log("madam: ", palindrome("madam"));
console.log("nurses run: ", palindrome("nurses run"));
