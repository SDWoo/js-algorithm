const fs = require('fs');
let [N, A, M, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

A = A.split(' ')
  .map(Number)
  .sort((a, b) => a - b);
B = B.split(' ').map(Number);
const result = [];

const binarySearch = (target) => {
  let start = 0;
  let end = N - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === target) return 1;
    if (A[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
};

B.forEach((target) => {
  result.push(binarySearch(target));
});

console.log(result.join('\n'));