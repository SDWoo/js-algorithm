function solution (n, lost, reserve) {
    const filterTarget = (array, target) => {
        return array.filter((value) => !(value === target))    
    }
    
    const borrowClothes = (reserveTarget, lostTarget) => {
        reserve = filterTarget(reserve,reserveTarget);
        lost = filterTarget(lost, lostTarget);
    }
    
    lost.forEach((i) => {
        if(lost.includes(i) && reserve.includes(i)) {
            borrowClothes(i, i);
    }})
    
    for(let i = 1; i <= n ; i +=1) {
        if(!lost.includes(i)) continue;        
        
        if(reserve.includes(i-1)) {
            borrowClothes(i-1, i);
            continue;
        }
        
        if(reserve.includes(i+1)) {
            borrowClothes(i+1, i)
        }
    }
    
    return n - lost.length
}
    
    