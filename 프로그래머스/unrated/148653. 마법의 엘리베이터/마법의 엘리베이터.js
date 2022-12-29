function solution(storey) {
    let answer = 0;
    let storey1 = storey;
    let storey2 = storey;
    let answer2 = 0;
    
    while(storey2 > 0) {
        if(storey2 % 10 > 5)  {
            answer2 += 10 - (storey2 % 10);
            storey2 =  Math.floor(storey2 / 10) + 1;
        }else {
            
        answer2 += storey2 % 10
        storey2 = Math.floor(storey2 / 10);
        }
            
    }
    
    answer = getAnswer(storey1);
    answer = Math.min(answer, answer2)
    return answer;
}

function getAnswer(storey) {
    let answer= 0;
    while(storey > 0) {
        if(storey % 10 >= 5)  {
            answer += 10 - (storey % 10);
            storey =  Math.floor(storey / 10) + 1;
        }
        else {
            console.log(answer, storey)
            answer += storey % 10
            storey = Math.floor(storey / 10) ;
        }
    }
    return answer;
}