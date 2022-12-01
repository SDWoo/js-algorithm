function solution(array) {
    let answer = 0;
    array.forEach((number)=> {
        if(number.length === 1) {
            answer = number === 7 ? answer + 1 : answer;
       
        }else {
            number.toString().split('').forEach((num) => {
            answer = num === '7' ? answer + 1 : answer;
        })
        }
        
    })
    return answer;
}