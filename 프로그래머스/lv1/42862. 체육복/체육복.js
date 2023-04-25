function solution (n, lost, reserve) {
    // 인접한 학생들에게만 체육복을 빌려줄 수 있음
    // 전체 n 을 돌면서 도난당한 학생들의 번호의 인접한 애들 중 여벌 체육복이 있으면 빼기
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    const indexFilter = (array, target) => {
        return array.filter((value) => !(value === target))    
    }
    
    lost.forEach((i) => {
        if(lost.includes(i) && reserve.includes(i)) {
            reserve = indexFilter(reserve, i);
            lost = indexFilter(lost, i);
    }})
    let answer = n - lost.length;
    
    let a = answer;
    for(let i = 1; i <= n ; i +=1) {
        if(!lost.includes(i)) continue;        
        
        if(reserve.includes(i-1)) {
            reserve = indexFilter(reserve, i-1);
            lost = indexFilter(lost, i);
            a++;
            continue;
        }
        
        if(reserve.includes(i+1)) {
            reserve = indexFilter(reserve, i+1);
            lost = indexFilter(lost, i);
            a++;
        }
    }
    
    let b = answer;
    for(let i = n-1; i >= 0 ; i -= 1) {
        if(!lost.includes(i)) continue;        
        
        if(reserve.includes(i-1)) {
            reserve = indexFilter(reserve, i-1);
            lost = indexFilter(lost, i);
            b++;
            continue;
        }
        
        if(reserve.includes(i+1)) {
            reserve = indexFilter(reserve, i+1);
            lost = indexFilter(lost, i);
            b++
        }
    }
    
    return Math.max(a,b);
}
    
    