function solution(dirs) {
    let answer = 0;
    const MIN = -5;
    const MAX = 5;
    let currX = 0; 
    let currY = 0;
    const set = new Set();
    
    dirs.split('').forEach((dir) => {
        let path = '' + currX + currY;
        if(dir === 'U' && currY + 1 <= MAX) {
            currY++;
        }
        else if(dir === 'D' && currY - 1 >= MIN ){
            currY--
        }
        else if(dir === 'L' && currX - 1 >= MIN){
            currX--
        }
        else if(dir ==='R' && currX + 1 <= MAX){
            currX++
        }else {
            return false;
        }
        let newPath = '' + currX + currY;
        set.add(currX + (currY + path)); 
        set.add(path + currX + currY);
    })
    return Math.floor(set.size / 2);
}