// 방법론이 두가지가 있다. 
// tickets의 경우의 수를 다 저장해놨다가 배열.toString sort로 0번째 리턴
// 그냥 그래프 
function solution(tickets) {
    const graph = {};
    for (const [src,dest] of tickets) {
        if(graph[src] === undefined) {
            graph[src] = [];
        }
        graph[src].push(dest);
    }
    
    for(const key in graph) {
        graph[key].sort((a,b) => a > b ?  -1 : 1);
    }
    
    const stack = ['ICN'];
    const answer = [];
    while(stack.length > 0) {
        const src = stack[stack.length - 1];
        
        if(graph[src] && graph[src].length > 0) {
            stack.push(graph[src].pop());
        }else answer.push(stack.pop());
    }
    
    return answer.reverse();
}