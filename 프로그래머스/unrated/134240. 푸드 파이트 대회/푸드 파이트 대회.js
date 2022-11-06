function solution(food) {
    let answer = ''
    for(let i = 1;i<food.length ; i++) {
        let j = Math.floor(food[i]/2);
        while(j > 0) {
            answer += i;
            j--;
        }
    }
    return answer + '0' + answer.split('').reverse().join('');    
}