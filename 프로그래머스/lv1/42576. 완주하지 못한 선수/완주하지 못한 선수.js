function solution(participant, completion) {
    let answer = '';
    participant.sort();
    completion.sort();
    
    participant.forEach((name, index) => {
        if(answer.length > 0) return;
        if(name !== completion[index]) answer = name;
    })
    
    return answer;

}