function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const a = s.charAt(i);
    if (a === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(a);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
