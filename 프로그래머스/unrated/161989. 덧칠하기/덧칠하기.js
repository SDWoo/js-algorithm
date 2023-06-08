function solution(n, m, section) {
    if(m === 1) return section.length;
    let answer = 0;
    
    while(section.length > 0) {
        let start = section[0];
        let end = 0;
        let max = start + m - 1;
        for(let i = 1; i < section.length; i+=1) {
            if(section[i] > max) {
                end = section[i];
                break;
            }
        }
        if(end === 0) {
            answer += 1;
            break;
        }
        section.splice(0,section.indexOf(end));
        answer +=1;
    }
    return answer;
}