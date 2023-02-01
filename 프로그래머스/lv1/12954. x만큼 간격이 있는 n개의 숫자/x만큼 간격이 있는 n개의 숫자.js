function solution(x, n) {
    return Array.from({length: n}, (v,i) => {
        return i*x + x
    });
}