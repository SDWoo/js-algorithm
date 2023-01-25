function solution(arr){
    const stack = [];
    
    stack.push(arr[0]);
    arr.forEach((value) => {
        if(stack[stack.length - 1] !== value) stack.push(value);
    })
    return stack;
}