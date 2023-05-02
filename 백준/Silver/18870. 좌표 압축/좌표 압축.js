const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = input[0];
const numbers = input[1].split(' ').map(Number);

// const n = 5;
// const numbers = [2, 4, -10, 4, -9];

const sortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);
let answer = '';

const dictionary = {};
sortedNumbers.forEach((v, i) => (dictionary[v] = i));

for (let i = 0; i < n; i += 1) {
  answer += dictionary[numbers[i]] + ' ';
}

console.log(answer);
