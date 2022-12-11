function solution(n) {
    let answer = 0;
    let a = 1, b= 2;
    for(let i = 2; i< n; i++) {
        answer = (a+b) % 1000000007;
        a = b % 1000000007;
        b = answer % 1000000007;
    }
    
    return answer % 1000000007;
}