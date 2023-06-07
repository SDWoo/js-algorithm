function solution(my_string) {
    const answer = [];
    my_string.split('').forEach((target) => {
        if(!isNaN(target)) answer.push(Number(target));
    })
    answer.sort((a,b) => a-b);
    return answer;
}