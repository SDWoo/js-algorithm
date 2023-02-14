function solution(k, tangerine) {
    let answer = 0;
    const tangerineMap = new Map();
    
    tangerine.forEach((amount) => {
        tangerineMap.set(amount, tangerineMap.get(amount) ?
                         tangerineMap.get(amount) + 1: 1);
    });
    
    const Counter = [...tangerineMap.values()].sort((a,b) => b-a);
    for(number of Counter) {
        if(k <= 0) break;
        k -= number;
        answer += 1;
    }   
    return answer;
}