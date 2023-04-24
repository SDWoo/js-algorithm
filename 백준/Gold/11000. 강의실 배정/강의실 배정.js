const fs = require('fs');
let [N, ...classes] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

classes = classes.map((string) => string.split(' ').map(Number));
classes.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let answer = 0;
let classroom = 0;
const timeTable = [];

for (let i = 0; i < N; i += 1) {
  timeTable.push({ time: classes[i][0], start: 1 });
  timeTable.push({ time: classes[i][1], start: -1 });
}

timeTable.sort((a, b) =>
  a.time === b.time ? a.start - b.start : a.time - b.time
);

timeTable.forEach((obj) => {
  if (obj.start === 1) {
    classroom += 1;
  } else if (obj.start === -1) {
    classroom -= 1;
  }

  answer = Math.max(classroom, answer);
});

console.log(answer);
