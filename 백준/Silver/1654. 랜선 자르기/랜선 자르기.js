const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['4 11', 802, 743, 457, 539];
const [k, n] = input[0].split(' ').map(Number);
const lines = input.filter((_, i) => i !== 0);

const maxLine = Math.max(...lines);

const isCut = (target) => {
  let count = 0;
  lines.forEach((value) => (count += Math.floor(value / target)));
  return count >= n;
};

let start = 1;
let end = maxLine;

while (start < end) {
  let mid = Math.floor((start + end + 1) / 2);
  if (isCut(mid)) start = mid;
  else end = mid - 1;
}

console.log(end);
