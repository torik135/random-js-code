// case sensitive
function palindromeCaseSensitive(arr) {
  let arrLen = arr.length;
  if (arrLen < 2) return "Palindrome";

  if (arr[0] !== arr[arrLen - 1]) {
    return "Not Palindrome";
  }

  return palindromeCaseSensitive(arr.slice(1, arr.length - 1));
}

console.log('Case Sensitive');
console.log("r: ", palindromeCaseSensitive("r"));
console.log("ra: ", palindromeCaseSensitive("ra"));
console.log("radar: ", palindromeCaseSensitive("radar"));
console.log("Radar: ", palindromeCaseSensitive("Radar"));

// not case sensitive
function palindromeCaseNotSensitive(arr) {
  let arrLen = arr.length;
  if (arrLen < 2) return "Palindrome";

  let arrLower = arr.toLowerCase();

  if (arrLower[0] !== arrLower[arrLen - 1]) {
    return "Not Palindrome";
  }

  return palindromeCaseNotSensitive(arr.slice(1, arr.length - 1));
}

console.log(`\nNot Case Sensitive`);
console.log("r: ", palindromeCaseNotSensitive("r"));
console.log("ra: ", palindromeCaseNotSensitive("ra"));
console.log("radar: ", palindromeCaseNotSensitive("radar"));
console.log("Radar: ", palindromeCaseNotSensitive("Radar"));
