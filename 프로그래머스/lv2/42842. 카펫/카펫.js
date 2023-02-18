function solution(brown, yellow) {
    let total = brown + yellow;
    let row = 0;
    let col = 2000000;
    
    for(let i=1; i<=yellow; i++) {
        if(yellow%i !== 0) continue;
        if(total%(i+2) !== 0) continue;
        row = Math.max(row, i+2);
    }
    
    return [row, total/row];
}