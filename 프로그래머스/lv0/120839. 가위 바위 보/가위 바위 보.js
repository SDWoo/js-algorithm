function solution(rsp) {
    let answer = '';
    const object = {
        '2': '0',
        '0': '5',
        '5': '2'
    }
    rsp.split('').forEach((alpha) => {
        answer += object[alpha];
    }) 
    
    return answer;
}