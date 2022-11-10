function solution(k, m, score) {
    
    let NumOfBoxes = Math.floor(score.length / m); // 박스 나올 수 있는 개수
    let index = m-1;
    let result = 0;
    
    if(NumOfBoxes === 0 && Math.max(...score) === 0) return result;
    
    score.sort((a,b) => b-a);

    console.log(score);
    while(NumOfBoxes > 0) {
        result += score[index] * m;
        NumOfBoxes -= 1;
        index += m;
    }
    
    return result;
}