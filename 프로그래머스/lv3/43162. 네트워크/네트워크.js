function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    for(let i =0; i<n; i+=1) {
        if(!visited[i]) {
            dfs(n,computers,visited, i);
            answer += 1;
        } 
    }
    
    return answer;
}

function dfs(n, computers, visited, start) {
    const stack = [start];
    
    while(stack.length > 0) {
        const curr = stack.pop();
        
        visited[curr] = true;
        
        for(let i = 0;i < n; i+= 1){
            if(!visited[i] && computers[curr][i]) {
                stack.push(i);
            }
        } 
    }
}