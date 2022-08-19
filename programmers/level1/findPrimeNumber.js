// 막 구현

/*
=> 최적화 과정에서 실패
function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++) {
        const arr = [];
        if(i < 4) {
            answer++;
            continue;
        }
        
        for(let j =2; j <= Math.sqrt(i); j++) {
            if(i%j === 0) arr.push(j);
        }
        answer += arr.length === 0 ? 1 : 0;
        
    }
    return answer;
}
 */

// 에라토스테네스의 체 방식
function solution(n) {
  let arr = [];
  let i = 2;
  for (i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] === 0) {
      continue;
    }
    for (let j = i * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((v) => v !== 0).length;
}
