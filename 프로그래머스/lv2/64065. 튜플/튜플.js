function solution(s) {
    const stack = [];
    const result = [];
    s.split('},').forEach((value) => {
        const newValue = value.replace(/[{]|[}]/g, '');
        stack.push(newValue.split(','));
    })
    stack.sort((a,b) => a.length - b.length);
    stack.forEach(array => {
        while(array.length > 0) {
            let currentValue = array.pop();
            
            if(result.includes(+currentValue)) {
                continue;
            }
            result.push(+currentValue);
        }
    })
    
    return result
}