function solution(my_string, n) {
    return my_string.split('').map((value)=> value.repeat(n)).join('');
}