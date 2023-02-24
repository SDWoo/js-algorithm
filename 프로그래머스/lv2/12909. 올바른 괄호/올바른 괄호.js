function solution(s){
    const stack = [];
    
    if(s[0] === ')') return false;
    stack.push(s[0]);
    for(let i=1; i<s.length; i++) {
        s[i] === ')' ? stack.pop() : stack.push(s[i]);
    }
    
    return stack.length === 0;
}