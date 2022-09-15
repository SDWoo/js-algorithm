function solution(n, a, b) {
  let count = 1;
  const floorNum = (number) => Math.floor((number + 1) / 2);
  while (true) {
    if (floorNum(a) === floorNum(b)) break;
    a = floorNum(a);
    b = floorNum(b);
    count++;
  }

  return count;
}

// 내가 처음에 생각했던 Math.ceil 방법

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
