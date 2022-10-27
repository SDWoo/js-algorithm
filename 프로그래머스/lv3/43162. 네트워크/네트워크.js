function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false);
    
    for(let i = 0; i < n; i+= 1){
        answer += dfs(computers, visited,i);
    }
    
    return answer;
}

function dfs(computers, visited, index){
    if(visited[index] === true) return 0;
    
    visited[index] = true;
    
    for(let j = 0; j < computers.length; j+= 1) {
        if(index !== j && computers[index][j] === 1 ) {
            dfs(computers, visited, j);
        }
    }
    
    return 1;
}

// computers[0] 을 보고 1인 것들 연결을 한다. 
// for문을 도는 중에 인덱스를 바꾸고 싶거나, 말이 안된다 싶으면 재귀함수 쓰기