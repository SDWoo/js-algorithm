function solution(n) {
    let answer = 0;
    let num = 1;
    while (num <= n) {
        answer += 1;
        num *= answer;
    }
    return num > n ? answer -1 : answer;
}