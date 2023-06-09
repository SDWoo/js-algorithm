function solution(i, j, k) {
    let answer = 0;
    for (let idx = i ; idx <= j; idx +=1) {
        answer += String(idx).split('').reduce((acc,cur) => {
            acc += cur === String(k) ? 1 : 0;
            return acc;
        }, 0);
    }
    return answer;
}