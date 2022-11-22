function isPrime(num) {
    if(num === 1 || num === 0) {
        return false;
    }
    
    if(num === 2) {
        return true;
    }
    
    for(let i = 2; i<= Math.floor(Math.sqrt(num)); i+= 1) {
        if(num % i === 0){
            return false
        }
    }
    
    return true;
}

function solution(n, k) {
    let result = 0;
    // 일단 진수 변환 => 순차적으로 돈다. 근데, 0이 나오는 경우에 판단한다. 
    const answer = [];
    const stack = [];
    while(n > 0) {
        stack.push(n % k);
        n = Math.floor(n / k);
    }
    
    let number = '';
    while(stack.length>0) {
        let digit = stack.pop();
        if(number && digit === 0) {
            answer.push(number);
            number = '';
        }else {
            number += digit;
        }
        
        if(number && stack.length === 0) answer.push(number);
    }
    
    
    if(answer.length === 1) {
        return isPrime(+answer[0]) ? 1 : 0
    }
    
    for(let i = 0; i<answer.length ; i+= 1) {
        if(isPrime(+answer[i])) result += 1;
    }
   
   return result; 
}