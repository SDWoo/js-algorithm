function solution(n) {
    let answer = 1;
    
    for(let i = 3; i<=n ;i+=1) {
        if(isPrime(i)) answer+= 1;
    }
    
    return answer;
}

function isPrime(num) {
    for(let i = 2; i*i <= num;i+=1) {
        if(num%i=== 0) return false;
    }
    return true 
}
