function solution(elements) {
    const result = [];
    let i = 0;    
    let length = elements.length;
    
    
    // 하나씩 맨처음 자기꺼 push, and 더하고 push and 더하고 push
        
    while(i < length) {
        let sum = elements[i];
        result.push(sum);
        for(let j = 1; j<length; j+= 1) {
            if(i+j >= length) sum += elements[(i+j)%length]
            else {
                sum += elements[i+j]
            }
            result.push(sum);
        }
        i+=1;
    }
    
    return [...new Set(result)].length;
}