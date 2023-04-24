const fs = require('fs');
let [N, ...board] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

board = board.map((line) => line.split(''));
let visited = Array.from({ length: N }, () => Array(N).fill(0));
let colorVisited = Array.from({ length: N }, () => Array(N).fill(0));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let answer = 0;
let colorAnswer = 0;

let first = '';
const bfs = (tx, ty) => {
  const queue = [];
  queue.push([tx, ty]);
  const first = board[tx][ty];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i += 1) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (board[nx][ny] === first && !visited[nx][ny]) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
};

const colorBfs = (tx, ty) => {
  const colorQueue = [];
  colorQueue.push([tx, ty]);
  const first = board[tx][ty];
  while (colorQueue.length) {
    const [x, y] = colorQueue.shift();
    for (let i = 0; i < 4; i += 1) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (
        (first === 'R' || first === 'G'
          ? board[nx][ny] === 'R' || board[nx][ny] === 'G'
          : board[nx][ny] === first) &&
        !colorVisited[nx][ny]
      ) {
        colorVisited[nx][ny] = 1;
        colorQueue.push([nx, ny]);
      }
    }
  }
};

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (!visited[i][j]) {
      bfs(i, j);
      answer += 1;
    }
  }
}

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (!colorVisited[i][j]) {
      colorBfs(i, j);
      colorAnswer += 1;
    }
  }
}
console.log(answer, colorAnswer);
