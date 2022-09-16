function palindromeCaseSensitive(arr) {
  if (arr.length < 2) return "to short!";

  let arrInp = arr.trim().replace(" ", "");
  let arrReverse = arr.split("").reverse().join("").trim().replace(" ", "");

  if (arrInp === arrReverse) return "is Palindrome";
  return "is Not Palindrome";
}

function palindromeNotCaseSensitive(arr) {
  if (arr.length < 2) return "to short!";

  let arrInp = arr.trim().replace(" ", "").toLowerCase();
  let arrReverse = arr.split("").reverse().join("").trim().replace(" ", "").toLowerCase();

  if (arrInp === arrReverse) return "is Palindrome";
  return "is Not Palindrome";
}

console.log(`\nCase Sensitive:`);
console.log("r: ", palindromeCaseSensitive("r"));
console.log("Radar: ", palindromeCaseSensitive("Radar"));
console.log("radar: ", palindromeCaseSensitive("radar"));
console.log("bed: ", palindromeCaseSensitive("bed"));
console.log("wing: ", palindromeCaseSensitive("wing"));
console.log("hair: ", palindromeCaseSensitive("hair"));
console.log("bob: ", palindromeCaseSensitive("bob"));
console.log("madam: ", palindromeCaseSensitive("madam"));
console.log("nurses run: ", palindromeCaseSensitive("nurses run"));

console.log(`\nNot Case Sensitive:`);
console.log("r: ", palindromeNotCaseSensitive("r"));
console.log("Radar: ", palindromeNotCaseSensitive("Radar"));
console.log("radar: ", palindromeNotCaseSensitive("radar"));
console.log("bed: ", palindromeNotCaseSensitive("bed"));
console.log("wing: ", palindromeNotCaseSensitive("wing"));
console.log("hair: ", palindromeNotCaseSensitive("hair"));
console.log("bob: ", palindromeNotCaseSensitive("bob"));
console.log("madam: ", palindromeNotCaseSensitive("madam"));
console.log("nurses run: ", palindromeNotCaseSensitive("nurses run"));
