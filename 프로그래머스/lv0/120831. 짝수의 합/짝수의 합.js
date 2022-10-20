function solution(n) {
    let sum = 0;
    for(let i = 1; i<=n/2; i+= 1) {
        sum += i*2;
    }
    return sum;
}