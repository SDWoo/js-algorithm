function solution(my_string) {
    my_string = my_string.split(' ');
    let answer = Number(my_string[0]);
    for(let i = 1 ; i < my_string.length; i += 2) {
        answer += my_string[i] === '+' ? 
            Number(my_string[i+1]) :
            (-1) * Number(my_string[i+1])
        
    }
    return answer;
}