function solution(price, money, count) {
    let result = 0;
    
    for(let i = 1; i<= count; i += 1) {
        result += price *i;
    }
    
    return result > money ? result - money : 0
}