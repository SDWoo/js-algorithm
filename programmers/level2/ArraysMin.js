function solution(A,B){
    var answer = 0;

    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    A.forEach((v,i) => {
        answer += v*B[i];
    })
    
    return answer;
}