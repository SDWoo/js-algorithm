function solution(sizes) {
  // 큰 수가 앞으로 오게 하고, 작은 수 뒤로 가게 한다.
  let maxWidth = 0;
  let maxHeight = 0;
  sizes.forEach((size) => {
    size.sort((a, b) => b - a);
    maxWidth = Math.max(maxWidth, size[0]);
    maxHeight = Math.max(maxHeight, size[1]);
  });
  return maxWidth * maxHeight;
}
