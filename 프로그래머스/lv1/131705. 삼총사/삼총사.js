function solution(number) {
    let result = 0;
    
    for(let i = 0; i< number.length-2 ; i+=1) {
        for(let j = i+1; j< number.length-1 ; j+=1) {
            for(let k = j+1; k< number.length ; k+=1) {
                result += number[i] + number[j] + number[k] === 0 ? 1 : 0;
            }
        }
    }
    return result;
}