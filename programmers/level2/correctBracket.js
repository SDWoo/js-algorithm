function solution(s){
    let correct = 0;
    for(let i =0 ; i<s.length; i++) {
        correct += s[i] === '('? +1 : -1;
        if(correct < 0) return false
    }
    return correct === 0;
}