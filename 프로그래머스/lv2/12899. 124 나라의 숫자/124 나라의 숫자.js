function solution(n) {
    const array = ['1', '2', '4'];
    n -= 1;
    
    function recursive(result,num) {
        const newNum = Math.floor(num / 3);
        result = array[num % 3] + result;
        if(newNum === 0) {
            return result;
        }
        return recursive(result, newNum-1)
        
    }
    
    return recursive('', n)
    
}

