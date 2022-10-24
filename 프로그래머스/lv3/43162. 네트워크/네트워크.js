// A <-> B <-> C 모두 같은 네트워크에 있음
function dfs(n, computers, visited, start) {
    const stack = [start]; // start 점 먼저 주기
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
function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    for(let i = 0; i<n; i+=1) {
        if(!visited[i]) {
            dfs(n, computers, visited, i);
            answer += 1;
        }
    }
    
    return answer;
}