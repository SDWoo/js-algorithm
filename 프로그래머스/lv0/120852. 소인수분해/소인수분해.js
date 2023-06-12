function solution(n) {
    var answer = [];
    let i = 2;
    while(n >= 2) {
        if(n % i === 0) {
            n = n/i;
            if(!answer.includes(i)) answer.push(i)
        }
        else {
            i += 1;
        }
    }
    return answer;
}
