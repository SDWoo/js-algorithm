function solution(keyinput, board) {
    const MaxX = Math.floor(board[0] / 2);
    const MaxY = Math.floor(board[1] / 2);
    let x = 0;
    let y = 0;
    
    keyinput.forEach((value,index) => {
        switch(value) {
            case 'left': {
                x -= x === (-1) * MaxX ? 0 : 1;
                break;
            }
            case 'right': {
                x += x === MaxX ? 0 : 1;
                break;
            }
            case 'up': {
                y += y === MaxY ? 0 : 1;
                break;
            }
            case 'down': {
                 y -= y === (-1) * MaxY ? 0 : 1;
                break;
            }
            default: {
                break;
            }
        }
    })
    return [x,y];
}