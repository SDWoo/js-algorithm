// 가장 큰 수의 배수중에 있다고 생각했다.
// 가장 큰 수의 배수 중, 모든 원소들과 나눠서 나머지가 0 인 것이 최소 공배수 일 것이다.
function solution(arr) {
  let biggest = arr.pop();
  let right = 1;
  while (true) {
    let lmn = biggest * right;
    if (arr.every((num) => lmn % num === 0)) {
      return lmn;
    }
    right++;
  }
}

// 내가 푼 것은 O(n^2) 이므로 더 좋은 방법이 무조건 존재할 것이다.

// 재귀함수를 통한 풀이 방법이다. 재귀 함수가 아직 많이 익숙치 않다.
//  이것을 재귀함수로 풀면 좋겠다 => while(true)의 방법인 느낌이다.
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
