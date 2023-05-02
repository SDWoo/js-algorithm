const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number).sort((a,b) => a-b);
const M = parseInt(input[2]);
const B = input[3].split(' ').map(Number);

const answer = [];

const getLowestIndex = (target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (A[mid] >= target) {
      end = mid;
    } else start = mid + 1;
  }
  return start;
};

const getHighestIndex = (target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (A[mid] > target) {
      end = mid;
    } else start = mid + 1;
  }
  return start;
};

for(let i = 0; i < M; i +=1) {
    let high = getHighestIndex(B[i], 0, N);
    let low = getLowestIndex(B[i], 0, N)
  answer.push(high-low);
}

console.log(answer.join(' '));
