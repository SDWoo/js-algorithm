function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? '수' : '박';
  }
  return answer;
}

// 다른 풀이
// repeat함수와 slice를 활용한 예
const waterMelon = (n) => '수박'.repeat(n).slice(0, n);
