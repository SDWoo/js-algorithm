function solution(money) {
    const price = 5500;
    
    return [Math.floor(money/price), money%price]
}