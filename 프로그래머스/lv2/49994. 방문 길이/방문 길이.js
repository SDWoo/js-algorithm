function solution(dirs) {
    let answer = 0;
    let up = 0;
    let down = 0;
    let left = 0;
    let right = 0;
    
    dirs.split('').forEach((dir) => {
            if(dir === 'U') {
                if(down > 0) down -= 1
                else up += 1;
            }
            else if(dir === 'D'){
                if(up > 0) up -= 1
                else down += 1;
            }
            else if(dir === 'L'){
                if(right > 0) right -= 1
                else left += 1;
            }
            else if(dir ==='R'){
                if(left > 0) left -= 1
                else right += 1;
            }
        console.log(left, right, up, down)
    })
    
    return up + down + left + right;
}