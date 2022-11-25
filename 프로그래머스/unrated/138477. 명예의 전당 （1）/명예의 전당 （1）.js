function solution(k, score) {
    const hallOfFame = [];
    const result = [];
    score.forEach((dayScore) => {
        if(hallOfFame.length < k) {
            hallOfFame.push(dayScore);
        }
        else {
            if(Math.min(...hallOfFame) <= +dayScore){
                hallOfFame.pop();
                hallOfFame.push(+dayScore);
            }
        }
        let min = Math.min(...hallOfFame);
        result.push(min);
        hallOfFame.sort((a,b) => b-a);
    })
    
    
    return result;
}