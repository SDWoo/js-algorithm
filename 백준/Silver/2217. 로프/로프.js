 const fs = require('fs');
 let [input, ...lof] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
lof = lof.map(Number);
let answer = 0;

lof.sort((a, b) => a - b);

for (let i = 1; i <= input; i += 1) {
  answer = Math.max(answer, lof[input - i] * i);
}
console.log(answer);
