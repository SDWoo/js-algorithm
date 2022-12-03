function solution(n, k) {
    const answer = [];
    const people = Array.from({length: n },(_, i) => i+1);
    let factorial = people.reduce((acc,cur) => acc * cur, 1);
    
    while(answer.length < n) {
        factorial = factorial / people.length;
        answer.push(...people.splice(Math.floor((k-1)/factorial), 1));
        k = k % factorial;
    }
    return answer;
}