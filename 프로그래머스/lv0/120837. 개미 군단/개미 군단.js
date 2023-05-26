function solution(hp) {
    let answer = 0;
    while(hp > 0) {
        if(Math.floor(hp / 5) > 0) {
            answer += Math.floor(hp / 5);
            hp = hp % 5;
        } else if(Math.floor(hp / 3) > 0) {
            answer += Math.floor(hp / 3);
            hp = hp % 3;
        } else if(Math.floor(hp / 1) > 0) {
            answer += Math.floor(hp / 1);
            hp = hp % 1;
        }
    }
    return answer;
}