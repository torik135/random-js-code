// case sensitive
function palindromeCaseSensitive(arr) {
  let arrIn = arr.replace(" ", "").trim();
  let arrLen = arrIn.length;
  if (arrLen < 2) return "Palindrome";

  if (arrIn[0] !== arrIn[arrLen - 1]) {
    return "Not Palindrome";
  }

  return palindromeCaseSensitive(arrIn.slice(1, arrIn.length - 1));
}

console.log(`\nCase Sensitive:`);
console.log("r: ", palindromeCaseSensitive("r"));
console.log("ab: ", palindromeCaseSensitive("ab"));
console.log("Radar: ", palindromeCaseSensitive("Radar"));
console.log("radar: ", palindromeCaseSensitive("radar"));
console.log("bed: ", palindromeCaseSensitive("bed"));
console.log("wing: ", palindromeCaseSensitive("wing"));
console.log("hair: ", palindromeCaseSensitive("hair"));
console.log("bob: ", palindromeCaseSensitive("bob"));
console.log("madam: ", palindromeCaseSensitive("madam"));
console.log("nurses run: ", palindromeCaseSensitive("nurses run"));

// not case sensitive
function palindromeNotCaseSensitive(arr) {
  let arrIn = arr.replace(" ", "").trim().toLowerCase();
  let arrLen = arrIn.length;
  if (arrLen < 2) return "Palindrome";

  if (arrIn[0] !== arrIn[arrLen - 1]) {
    return "Not Palindrome";
  }

  return palindromeNotCaseSensitive(arrIn.slice(1, arrIn.length - 1));
}

console.log(`\nNot Case Sensitive:`);
console.log("r: ", palindromeNotCaseSensitive("r"));
console.log("ab: ", palindromeNotCaseSensitive("ab"));
console.log("Radar: ", palindromeNotCaseSensitive("Radar"));
console.log("radar: ", palindromeNotCaseSensitive("radar"));
console.log("bed: ", palindromeNotCaseSensitive("bed"));
console.log("wing: ", palindromeNotCaseSensitive("wing"));
console.log("hair: ", palindromeNotCaseSensitive("hair"));
console.log("bob: ", palindromeNotCaseSensitive("bob"));
console.log("madam: ", palindromeNotCaseSensitive("madam"));
console.log("nurses run: ", palindromeNotCaseSensitive("nurses run"));
