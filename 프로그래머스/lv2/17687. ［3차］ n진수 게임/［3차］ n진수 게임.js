function solution(n, t, m, p) {
    let answer = '';
    let num = 0
    let binary = '';
    
    while (binary.length < t * m) {
        binary += (num.toString(n).toUpperCase());
        ++num;
    }
    
    for (let i = p - 1; i < t * m; i += m) {
        answer += binary[i];
    }
    
    return answer;
}