function solution(array) {
    let map = new Map();
    array.forEach((v) => {
        map.set(v,(map.get(v) || 0 ) + 1);
    });
    const answer = [...map.entries()].sort((a,b) => b[1] - a[1]);
    if(answer.length === 1) return answer[0][0]
    if(answer[0][1] === answer[1][1]) return -1;
    return answer[0][0];
    
}