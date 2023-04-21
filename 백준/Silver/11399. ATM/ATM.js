const fs = require('fs');
let [N, people] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

people = people
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let time = [people[0]];

for (let i = 1; i < N; i += 1) {
  time.push(time[i - 1] + people[i]);
}

console.log(
  time.reduce((acc, cur) => (acc += cur))
);
