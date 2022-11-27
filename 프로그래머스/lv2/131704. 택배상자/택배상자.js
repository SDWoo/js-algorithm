function solution(order) {
  let result = 0;
  const stack = [];
  for (let i = 1; i <= order.length; i++) {
    stack.push(i);
    while (stack.length > 0) {
     if(stack[stack.length - 1] === order[result]) {
      stack.pop();
      result++;
     }else{
        break;
     }
    }
  }
  return result;
}