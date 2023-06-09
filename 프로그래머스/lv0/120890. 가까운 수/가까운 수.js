function solution(array, n) {
    array.sort((a,b) => a-b);
    const min = [];
    for(let i = 0; i < array.length; i += 1){
        min.push(Math.abs(array[i] - n));
    }
    
    return array[min.indexOf(Math.min(...min))]
}