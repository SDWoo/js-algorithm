// 이 문제는 사실 피보나치 수열을 구하는 문제였다.
function solution(n) {
  const arr = [0, 1, 2];
  if (n < 3) {
    return arr[n] & 1234567;
  }
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n] % 1234567;
}

// 이것도 재귀로 푸는 방법이 있었다,
// 어떻게든 1,2 부터 시작해서 올라올 것이다.
function jumpCase(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;
  return jumpCase(num - 1) + jumpCase(num - 2);
}
