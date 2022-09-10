function solution(n) {
  let answer = 0; // 자기 자신일 경우 1 추가 해놓고 시작
  let sum = 0;
  for (let num = 1; num < n; num++) {
    for (let i = num; i <= n; i++) {
      sum += i;
      if (sum > n) {
        sum = 0;
        break;
      }
      if (sum === n) {
        answer += 1;
        sum = 0;
        break;
      }
    }
  }

  return answer + 1;
}

// 색다른 접근 - 홀수인 약수의 갯수만 더해도 가능하다

function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}
