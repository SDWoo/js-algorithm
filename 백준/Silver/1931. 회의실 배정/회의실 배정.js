const fs = require('fs');
let [input, ...meetings] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let currentTime = 0;
let answer = 0;
meetings = meetings.map((meeting) => {
  const [start, end] = meeting.split(' ').map(Number);
  return [start, end];
});

meetings.sort(([start1, end1], [start2, end2]) => {
  if(end1 === end2) return start1 > start2 ? 1: -1;
  return end1 > end2 ? 1 : -1;
});

for (let i = 0; i < input; i += 1) {
  if (currentTime > meetings[i][0]) continue;
  answer += 1;
  currentTime = meetings[i][1];
}

console.log(answer);
