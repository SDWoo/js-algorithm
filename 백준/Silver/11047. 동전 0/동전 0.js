const fs = require('fs');
let [input, ...money] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

money = money.map(Number);
let [n, total] = input.split(' ').map(Number);

console.log(
  money.reverse().reduce((acc, cur) => {
    acc += Math.floor(total / cur);
    total = total % cur;
    return acc;
  }, 0)
);
