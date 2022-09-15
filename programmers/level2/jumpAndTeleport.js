function solution(n) {
  let result = 1;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      continue;
    }
    n -= 1;
    result++;
  }
  return result;
}

// 다른 방법 2진수로 바꿔 풀기
// 1의 개수가 2를 곱한 개수니까 1의 갯수만 구하면 된다.
function soluntion2(n) {
  return n.toString(2).replace(/0/g, '').length;
}
