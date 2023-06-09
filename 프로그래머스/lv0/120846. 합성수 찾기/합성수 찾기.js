function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i +=1) {
        answer += getMeasure(i);
    }
    return answer;
}

const getMeasure = (num) => {
    let count = 0;
    for(let i = 1;  i<= num ; i += 1) {
        if(num % i === 0) count += 1;
    }
    return count > 2 ? 1 : 0
}