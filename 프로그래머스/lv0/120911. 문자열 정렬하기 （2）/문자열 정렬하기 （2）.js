function solution(my_string) {
    return my_string.toLowerCase().split('').sort((a,b) => a > b ? 1: -1).join('');
}