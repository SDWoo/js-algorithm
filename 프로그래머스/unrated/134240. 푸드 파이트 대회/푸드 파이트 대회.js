function solution(food) {
    let answer = ''
    food.splice(1,food.length).forEach((value, index) => {
        for(let i = 0; i <Math.floor(value/2); i+= 1) {
            answer += index+1;
        }
        
    })
            
    return answer + '0' + answer.split('').reverse().join('');
}