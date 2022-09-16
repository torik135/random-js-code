/*
remove all of the special chars [!,?. _'@] from the string and get the string length.
*/

function stringToken(str) {
  if (str.length < 1) return "to short!";

  const specChars = /[!,?. _'@]+/;
  const strInp = str;
  // split input str with special chars.
  let strSplit = strInp.split(specChars); //typeof obj
  // get str count withut empty space ('').
  let strCount = strSplit.filter(x => {if(x !== '') return x}).length;
  let strWCount = [strCount, ...strSplit];
  // get the value
  let result = Object.values(strWCount);

  return result.filter(x => {
    if(x !== '') return x;
  });
}

const str = "He is a very very good boy, isn't he?";
const str2 = "email@email.com";
const str3 = "it's a bear!!, period!.";

console.log(stringToken(str));
console.log(stringToken(str2));
console.log(stringToken(str3));
