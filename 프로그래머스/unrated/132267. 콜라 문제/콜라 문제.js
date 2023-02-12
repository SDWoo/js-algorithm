function solution(a, b, n) {
    let quot = 0 , remain = 0, answer = 0;
    
    while(n >= a) {
        quot = Math.floor(n/a);
        n = quot * b + n % a;
        answer += quot * b;
    }
    
    return answer;
}
