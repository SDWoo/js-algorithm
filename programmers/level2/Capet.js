function solution(brown, yellow) {
    let answer = []
    let total = brown + yellow;
    let row = 0;
    let col = 10000000;
    
    for(let i=0; i<=yellow; i++) {
        if(yellow%i !== 0) continue;
        if(total%(i+2) !== 0) continue;

        row = Math.max(row, i+2);
        col = Math.min(col, total/(i+2));
        answer = [row, col]
    }
    
    return answer;
}