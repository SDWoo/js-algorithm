function solution(people, limit) {
    // 어차피 맨처음 애 넣고 걔랑 같이 넣을 수 있는 애없으면 끝임 ㅇ.ㅇ
    // 무거운 사람 + 가벼운 사람?
    // sort하고 하자 ㅇ,ㅇ
    people.sort((a,b) => a-b);
    let small = 0
    let big = people.length - 1;
    let answer = 0;
    
    while (big >= small) {
        if(people[big] + people[small] > limit) {
            big--;
            answer++;
        }else {
            small++;
            big--;
            answer++;
        }
    }
        
    return answer;
}


