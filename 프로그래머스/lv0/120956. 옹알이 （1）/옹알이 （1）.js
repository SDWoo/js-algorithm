function solution(babbling) {
    const list = ["aya", "ye", "woo", "ma"];
    let answer1 = [];
    list.sort((a,b) => a > b ? 1: -1);
    for(let bab of babbling) {
        list.forEach((word) => {
          bab = bab.replace(word, '');
        })
        answer1.push(bab.length === 0 ? 1 : 0);    
    }
    const answer2 = [];
    list.sort((a,b) => b>a ? 1 : -1);
    for(let bab of babbling) {
        list.forEach((word) => {
          bab = bab.replace(word, '');
        })
        answer2.push(bab.length === 0 ? 1 : 0);  
    }
    
    return answer1.reduce((acc,cur, i) => {
        console.log(cur, answer2[i], i);
        acc += cur === 1 && answer2[i] === 1 ? 1: 0;
        return acc
    }, 0)
    
}