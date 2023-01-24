function solution(s) {
    let half = Math.floor(s.length/2);
    console.log(half);
    return s.length % 2 === 0 ? 
        s[half-1] + s[half] :
        s[half];
}
