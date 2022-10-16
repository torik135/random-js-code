/*
write the function number_cardinality that takes an integer and returns a string, as follows:
1. return the string 'zero' if the number ends with zero (0).
2. return the string 'five' if the number ends with five (5).
3. return the string 'even' if the number is even (divisible by 2) AND does not end with
    a zero (0).
4. return the string 'odd' if the number is odd (not divisible by 2) AND does not end with five (5).


ex:
inp: 100
out: zero

inp: 88
out: even

inp: 155
out: five

inp: 99
out: odd
*/

function numberCardinality(n) {
  var nLast = n.toString().slice(-1);

  if(nLast == 0) return 'zero';
  if(nLast == 5) return 'five';
  if(n % 2 == 0 && nLast != 0) return 'even';
  if(n % 2 != 0 && nLast != 0) return 'odd';
}

console.log("100: ", numberCardinality(100));
console.log("88: ", numberCardinality(88));
console.log("155: ", numberCardinality(155));
console.log("99: ", numberCardinality(99));
