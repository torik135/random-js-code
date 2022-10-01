/*
 * Given an integer 'n', return the number of ways you can write 'n' as the sum of consecutive positive integers.
 *
 * Example 1:
 * INPUT: n = 5
 * OUTPUT: 2
 * EXPLANATION: 5 = 2 + 3
 *
 * Example 2:
 * INPUT: n = 9
 * OUTPUT: 3
 * EXPLANATION: 9 = 4 + 5 = 2 + 3 + 4
 *
 * Example 3:
 * INPUT: n = 15
 * OUTPUT: 4
 * EXPLANATION: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
 * */

function consecutiveNumbersSum(n) {
  let result = 0;

  for (let i = 1; (i * (i + 1)) / 2 <= n; i++) {
    let j = (i * (i + 1)) / 2;
    // console.log(`j = ${i} * (${i} + 1) / 2 = ${j}`);
    let k = (n - j) % i == 0;
    // console.log(`---(${n} - ${j}) % ${i} == 0: ${k}`);
    if (k) ++result;
  }
  return result;
}

const inp1 = 5;
const inp2 = 9;
const inp3 = 15;

const res1 = consecutiveNumbersSum(inp1); // 2
const res2 = consecutiveNumbersSum(inp2); // 3
const res3 = consecutiveNumbersSum(inp3); // 4

console.log(`INPUT ${inp1}, expected: 2, OUTPUT : ${res1}`);
console.log(`INPUT ${inp2}, expected: 3, OUTPUT : ${res2}`);
console.log(`INPUT ${inp3}, expected: 4, OUTPUT : ${res3}`);
