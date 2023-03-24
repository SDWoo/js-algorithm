function solution(n) {
    for(let i = 1; i <= n; i+= 1) {
        if(((i * 6) / n ) % 1 === 0) return i;
    }
}