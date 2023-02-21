function solution(clothes) {
    const answer = new Map();
    
    for(let i =0; i<clothes.length; i++) {
        answer.set(clothes[i][1], (answer.get(clothes[i][1])||0)+1);
    }
    
    return[...answer.values()].reduce((acc,cur) => acc = acc * (cur+1), 1) - 1;
}