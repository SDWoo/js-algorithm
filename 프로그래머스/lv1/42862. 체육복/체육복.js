function solution (n, lost, reserve) {
    let filteredLost = lost.filter((v) => !reserve.includes(v)).sort((a,b) => a-b);
    const filteredReserve = reserve.filter((v) => !lost.includes(v)).sort((a,b) => a-b);
    
    filteredReserve.forEach((v) => {
        const borrow = filteredLost.find((w)=> Math.abs(w-v) === 1);
        if(borrow) {
            filteredLost = filteredLost.filter((v) => v !== borrow);
        }
    })
    
    return n - filteredLost.length;
    
//     for(let i = 1; i <= n ; i +=1) {
//         if(!lost.includes(i)) continue;        
        
//         if(reserve.includes(i-1)) {
//             borrowClothes(i-1, i);
//             continue;
//         }
        
//         if(reserve.includes(i+1)) {
//             borrowClothes(i+1, i)
//         }
//     }
    
//     return n - lost.length
}
    
    