function solution(age) {
    const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    return age.toString().split('').map((val) =>arr[val].toLowerCase()).join('');
    
}