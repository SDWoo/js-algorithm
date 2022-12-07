function solution(k, tangerine) {
    let answer = 0;
    const tangerineMap = new Map();
    
    tangerine.forEach((amount) => {
        tangerineMap.set(amount, tangerineMap.get(amount) ?
                         tangerineMap.get(amount) + 1: 1);
    });
    
    const Counter = [...tangerineMap.values()].sort((a,b) => b-a);
    // 역순으로 정렬 -> 값이 k보다 크다? 하나로 다 넣기 : 다 넣고 다음 밸류 보기.
    for(number of Counter) {
        k -= number;
        answer += 1;
        if(k <= 0) break;
    }   
    return answer;
}