function solution(my_str, n) {
    const answer = [];
    while(my_str.length > n) {
        answer.push(my_str.slice(0,n));
        my_str = my_str.substring(n);
    }
    if(my_str.length) answer.push(my_str); 
    return answer;
}