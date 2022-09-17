function solution(s) {
  let correct = 0;
  for (let i = 0; i < s.length; i++) {
    correct += s[i] === '(' ? +1 : -1;
    if (correct < 0) return false;
  }
  return correct === 0;
}

// stack 풀이

function solution(s) {
  const stack = [];

  if (s[0] === ')') return false;
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    s[i] === ')' ? stack.pop() : stack.push(s[i]);
  }

  return stack.length === 0;
}
