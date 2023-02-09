function solution(left, right) {
    let result = 0;
    let measure = 0;
    for(let i = left ; i <=right ; i += 1) {
        for(let j = 1; j<=i; j+=1) {
            measure += i%j === 0 ? 1 : 0;
        }
        result += measure % 2 === 0 ? i : -i;
        measure = 0;
    }
    
    return result;
}