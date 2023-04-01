function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n ; i+= 1) {
        answer += (n / i)% 1=== 0 ? 1 : 0;
    }
    return answer;
}