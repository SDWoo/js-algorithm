function solution(participant, completion) {
    let result = '';
    participant.sort();
    completion.sort();
    
    participant.forEach((name, index) => {
        if(result.length > 0) return;
        if(name !== completion[index]) result = name;
    })
    
    return result;

}