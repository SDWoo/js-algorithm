const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const n = input[0];
const coin = input.filter((_, i) => i !== 0).sort((a,b) => a-b);

const two = [];
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    two.push(coin[i] + coin[j]);
  }
}

const sortedTwo = [...new Set(two.sort((a, b) => a - b))];

for (let i = n - 1; i > 0; i -= 1) {
  for (let j = 0; j < n; j += 1) {
    if (sortedTwo.includes(coin[i] - coin[j])) {
      console.log(coin[i]);
      return;
    }
  }
}
