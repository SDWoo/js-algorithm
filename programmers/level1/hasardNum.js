function solution(x) {
  let sum = 0;
  x.toString()
    .split('')
    .forEach((num) => {
      sum += Number(num);
    });

  return x % sum === 0 ? true : false;
}
