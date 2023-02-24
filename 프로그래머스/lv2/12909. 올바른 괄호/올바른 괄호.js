function solution(s){
    const stack = [];
    
    if(s[0] === ')') return false;
    stack.push('(');
    for(let i=1; i<s.length; i+=1) {
        s[i] === ')' ? stack.pop() : stack.push(s[i]);
    }
    
    return stack.length === 0;
}