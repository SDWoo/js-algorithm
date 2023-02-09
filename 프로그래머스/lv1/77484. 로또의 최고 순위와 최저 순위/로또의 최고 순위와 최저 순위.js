function solution(lottos, win_nums) {
    let correctNum = lottos.filter((num) => win_nums.includes(num)).length;
    let zeroNum = lottos.filter((num)=> num === 0).length;
    
    return [getPrice(zeroNum+ correctNum), getPrice(correctNum)];
}

function getPrice(num) {
    return num < 2 ? 6 : 7 - num;
}
