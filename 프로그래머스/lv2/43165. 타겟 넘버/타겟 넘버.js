function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (index, currentAnswer, sign) => {
        currentAnswer += sign * numbers[index];
        if(index < numbers.length - 1) {
            dfs(index + 1, currentAnswer, -1);
            dfs(index + 1, currentAnswer, 1);            
        }
        if(index === numbers.length-1 && currentAnswer === target) {
            answer += 1;
            return;
        }
    }
    dfs(0, 0, -1);
    dfs(0, 0, 1);
    
    return answer;
}