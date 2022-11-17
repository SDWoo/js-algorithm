function solution(number, limit, power) {
    const array = [];

    for(let i = 1; i<=number; i += 1) {
        let count = 0;
        for(let j = 1; j<= Math.sqrt(i); j += 1) {
            if(j === Math.sqrt(i)) count += 1;
            else if(i % j === 0) count += 2;
        }
        count = count > limit ? power : count;
        array.push(count);
    }
    return array.reduce((acc,cur) => acc += cur);
}