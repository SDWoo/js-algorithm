function solution(board)
{
    let max = 0;
    const col = board[0].length;
    const row = board.length;
    let dp = new Array(row+1).fill(0,0,row+1);
    for(let i=0; i<row+1; i++){
        dp[i] = new Array(col+1).fill(0,0,col+1);
    }
    
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            dp[i+1][j+1] = board[i][j];
        }
    }
    
    for(let i=1; i<=row; i++){
        for(let j=1; j<=col; j++){
            if(dp[i][j] !== 0){
                let min = dp[i-1][j];
                min = min < dp[i-1][j-1] ? min : dp[i-1][j-1];
                min = min < dp[i][j-1] ? min : dp[i][j-1];        
                dp[i][j] = min + 1;
                if(dp[i][j] > max)
                    max = dp[i][j];
            }                
        }
    }
    return max**2;
}