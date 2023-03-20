function solution(keymap, targets) {
    const answer = [];
    targets.map((target) => {
        let index = 0;
        target.split('').forEach((char) => {
            index += keymap.reduce((acc,cur) => {
                if(cur.split('').indexOf(char) === -1) {
                    return acc;
                }    
                return Math.min(acc, cur.split('').indexOf(char) + 1)
            }, 10000);
        })
        index > 1000 ? answer.push(-1) : answer.push(index)
    })
    return answer;
}