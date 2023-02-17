function solution(numbers) {
    const answer = Array.from({length: numbers.length}, () => -1);
    const stack = [];
    
    numbers.forEach((number, index)=> {
        while(stack && numbers[stack[stack.length - 1]] < number) {
            answer[stack.pop()] = number;
        }
        stack.push(index);
    })
    
    return answer;
}