function solution(arr) {
  const stack = [];

  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (stack[stack.length - 1] !== arr[i]) {
      stack.push(arr[i]);
    }
  }

  return stack;
}

// stack 사용 안하기

function soluntion2(arr) {
  return arr.filter((v, i, arr) => v !== arr[i + 1]);
}
