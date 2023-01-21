function solution(array) {
    let max = Math.max(...array);
    let arr = [max];
    array.forEach((v, i) => {
        if(v=== max) arr.push(i)
    });
    
    return arr;
}