function solution(cipher, code) {
    let answer = '';
    cipher.split('').forEach((v, i) => {
        answer += (i+1) % code === 0 ? v : ''
    })
    return answer;
}