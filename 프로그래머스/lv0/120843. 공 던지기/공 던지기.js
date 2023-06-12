function solution(numbers, k) {
    let i = 0;
    let answer = 0;
    for(let j = 1 ; j < k ; j +=1) {
        i = i + 2 >= numbers.length ? i+2 - numbers.length : i + 2;
    }
    return numbers[i];
}