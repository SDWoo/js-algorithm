function solution(progresses, speeds) {
    const answer = [];
    let remainDays = progresses.map((prog, index) => Math.ceil((100 - prog) / speeds[index]));
    
    let sum = 0;
    let currentNum = remainDays[0];
            
    for(let i = 0; i <remainDays.length; i+=1) {
        if(currentNum >= remainDays[i]) {
            sum += 1;
        }else {
            answer.push(sum);
            currentNum = remainDays[i] ;
            sum = 1;
        }
    }
    if(sum !== 0) answer.push(sum);
    return answer;
}

