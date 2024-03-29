function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let target = board[j][moves[i]-1];
            
            if(!target) continue;
            
            if(target === stack[stack.length -1]) {
                stack.pop();
                result += 2;
            }else {
                stack.push(target);
            }
            board[j][moves[i]-1] = 0;
            break;
                
            
        }
    }
    return result;
}