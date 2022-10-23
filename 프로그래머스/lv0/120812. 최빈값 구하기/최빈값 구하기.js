function solution(array) {
    let count = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    const keys = Object.keys(count);
    let values = Object.values(count);
    let max = Math.max(...values);
    let answer = [];
    keys.forEach((v) => {
        if(count[v] === max) answer.push(parseInt(v));
    })
    
    return answer.length === 1 ? answer[0] : -1;
    
}