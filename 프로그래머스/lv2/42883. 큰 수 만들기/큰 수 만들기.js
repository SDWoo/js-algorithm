function solution(number, k) {
  let answerStack = [0];
  let deleteCount = -1;
  for (let index = 0; index < number.length; index++) {
    while (deleteCount < k && number[index] > answerStack[answerStack.length - 1]) {
      answerStack.pop();
      deleteCount++;
    }
    if (answerStack.length < number.length - k) answerStack.push(number[index]);
  }
  return answerStack.join('');
}
