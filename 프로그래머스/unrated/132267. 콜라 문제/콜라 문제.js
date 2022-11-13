function solution(a, b, n) {
    let quot = 0 , remain = 0, answer = 0;
    
    while(n >= a) {
        quot = Math.floor(n/a);
        remain = n % a;
        
        const returnCoke= quot * b;
        n = returnCoke + remain;
        
        answer += returnCoke;
        
     }
    
    return answer;
}
