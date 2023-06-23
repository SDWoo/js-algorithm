function solution(sides) {
    let answer = 0;
    sides.sort((a,b) => a-b)
    const [a,b] = sides;
    for(let i = 1; i < a+b; i+= 1 ) {
        const max = Math.max(a,b,i);
        if(max === b && a + i > b) {
            answer += 1;
        }else if (max === i && a + b > i){
            answer += 1;
        }
    }
    return answer;
}