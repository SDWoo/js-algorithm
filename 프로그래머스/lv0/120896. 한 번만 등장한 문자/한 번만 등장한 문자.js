function solution(s) {
    let answer = '';
    const map = new Map();
    s.split('').forEach((chr) => {
        const cur = map.get(chr);
        map.set(chr, cur ? cur + 1: 1);
    })
    
    s.split('').sort().forEach((val) => {
        if(map.get(val) === 1) {
            answer += val   
        } 
    });
    
    return answer;
}