function solution(s) {
    if(s.length === 1) return 1;
    
    let answer = 0;
    let first = s[0];
    let firstNum = 0;
    let otherNum = 0;
    
    s.split('').forEach((char,index) => {
        if(char === first) {
            firstNum += 1;
        }else {
            otherNum += 1;
        }
        
        if (firstNum === otherNum) {
            first = index === s.length - 1 ? '' : s[index+1];
            firstNum = 0;
            otherNum = 0;
            answer += 1;
        }
        
    })
    
    if(firstNum > 0 || otherNum > 0) {
        answer += 1;
    }
    return answer;
}