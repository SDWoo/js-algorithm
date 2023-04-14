function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 공간 만들기
    let board = Array.from({length: 101}, () => Array(101).fill(-1));
    let visited = Array.from({length: 101}, () => Array(101).fill(0));
    const dx = [1, 0 ,-1 , 0];
    const dy = [0, 1 , 0 ,-1];
    const queue = [[characterX * 2, characterY *2, 0]];
    
    // 공간 저장 
    for (let [lx,ly,rx,ry] of rectangle) {
        const [x1, y1, x2, y2] = [lx*2, ly*2, rx*2, ry*2];
        
        for(let x = x1; x <= x2; x+=1) {
            for(let y = y1; y <= y2; y +=1) {
                if(x > x1 && x < x2 && y > y1 && y < y2) board[x][y] = 0;
                else if(board[x][y] !== 0) board[x][y] = 1;
            }
        }
    }
    
    
    while(queue.length) {
        const [x,y, answer] = queue.shift();
        
        if(x === itemX*2 && y === itemY*2) {
            return answer / 2;
        }
        for(let i = 0; i < 4; i+=1) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(nx < 0 || ny < 0 || nx > 100 || ny > 100) continue;
            if(board[nx][ny] !== 1 || visited[nx][ny]) continue;
            visited[nx][ny] = 1;
            queue.push([nx,ny, answer+1]);
        }
    }
    
    
    
}