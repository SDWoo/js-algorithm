function solution (n, lost, reserve) {
    const filterTarget = (array, target) => {
        return array.filter((value) => !(value === target))    
    }
    
    lost.forEach((i) => {
        if(lost.includes(i) && reserve.includes(i)) {
            reserve = filterTarget(reserve, i);
            lost = filterTarget(lost, i);
    }})
    
    for(let i = 1; i <= n ; i +=1) {
        if(!lost.includes(i)) continue;        
        
        if(reserve.includes(i-1)) {
            reserve = filterTarget(reserve, i-1);
            lost = filterTarget(lost, i);
            continue;
        }
        
        if(reserve.includes(i+1)) {
            reserve = filterTarget(reserve, i+1);
            lost = filterTarget(lost, i);
        }
    }
    
    return n - lost.length
}
    
    