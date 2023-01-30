function solution(n) {
    return n.toString().split('').map(val=>Number(val)).reverse();
}