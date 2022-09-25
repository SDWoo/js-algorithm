function solution(price, money, count) {
  let realPrice = 0;

  for (let i = 1; i <= count; i++) {
    realPrice += price * i;
  }
  if (realPrice > money) {
    return realPrice - money;
  } else {
    return 0;
  }
}
