function solution(A, B) {
    if(A===B) return 0;
    
    let count = 0;
    
    while(count < A.length-1) {
        A = A.split('');
        const last = A.pop();
        A = last + A.join('');
        count += 1;
        
        if (A === B) return count;
        
    }
    
    return -1;
}