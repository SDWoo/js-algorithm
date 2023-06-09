function solution(order) {
    return order.toString().split('').reduce((acc,cur) => {
        if(Number(cur) % 3 === 0 && Number(cur) / 3 > 0) acc += 1;
        return acc;
    }, 0)
}