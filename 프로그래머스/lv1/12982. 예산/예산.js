// 각 부서가 신청한 금액 모두를 지원해줘야 함
function solution(d, budget) {
    d.sort((a,b) => a-b);
    let i = 0;
    while(budget >= d[i]) {
        budget -= d[i];
        i++;
    }
    return i;
}