function solution(num, k) {
    num = num.toString().split('').map(Number);
    return num.indexOf(k) > -1 ?  num.indexOf(k) + 1 : -1;
}