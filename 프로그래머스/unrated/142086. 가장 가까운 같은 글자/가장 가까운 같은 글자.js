function solution(s) {
    const answer = [];
    const map = new Map();
    
    s.split('').forEach((alpha, index) => {
        map.get(alpha) !== undefined ? answer.push(index-map.get(alpha)) : answer.push(-1);;
        map.set(alpha, index);
    })
    
    return answer;
}