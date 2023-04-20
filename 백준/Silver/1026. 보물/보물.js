const fs = require('fs');
let [input, A, B] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let answer = 0;

A = A.split(' ').map(Number);
B = B.split(' ').map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for (let i = 0; i < input; i += 1) {
  answer += A[i] * B[i];
}

console.log(answer);
