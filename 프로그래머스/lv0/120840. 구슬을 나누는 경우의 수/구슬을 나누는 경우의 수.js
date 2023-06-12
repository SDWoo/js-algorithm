function solution(balls, share) {
    if(balls === share) return 1;
    return Math.round(getFactorial(balls) / ( getFactorial(balls-share) * getFactorial(share)));
}

const getFactorial = (num) => {
    let factorial = 1;
    for(let i = 1; i <=num ; i+=1) {
        factorial *= i;
    }
    return factorial;
}