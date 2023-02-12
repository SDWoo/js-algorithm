function solution(k, m, score) {
    
    let NumOfBoxes = Math.floor(score.length / m); // 박스 나올 수 있는 개수    
    if(NumOfBoxes === 0 && Math.max(...score) === 0) return 0;
    
    return getResult(NumOfBoxes, m, score)
}

function getResult (NumOfBoxes, m, score) {
    let result = 0;
    let index = m - 1;
    
    score.sort((a,b) => b-a);
    
    for(let i = NumOfBoxes; i > 0 ; i -= 1) {
        result += score[index] * m;
        index += m;
    }
    
    return result;
}