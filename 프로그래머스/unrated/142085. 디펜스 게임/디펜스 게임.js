function solution(n, k, enemy) {
    let left = 0;
    let right = enemy.length;
    let mid = Math.floor((left+right) / 2);
    
    while(left <= right) {
        const target = enemy.slice(0,mid).sort((a,b) => b-a);
        let ticket = k;
        let sum = 0;
        target.forEach((num) => {
            if(ticket > 0) {
                ticket--;
            }else {
                sum += num;
            }
        })
        if(n - sum >= 0 && ticket >= 0) {
            left = mid+1;
        }else {
            right = mid-1;        
        }
        mid = Math.floor((left+right) / 2);
    }
    return left-1;
}