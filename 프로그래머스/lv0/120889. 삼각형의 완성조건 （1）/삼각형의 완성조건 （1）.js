function solution(sides) {
    sides.sort((a,b) => a-b);
    const sum = sides[0] + sides[1];
    
    return Math.max(...sides) < sum ? 1 : 2;
}