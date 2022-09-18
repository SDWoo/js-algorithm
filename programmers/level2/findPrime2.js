// 1. Numbers에서 숫자를 나열
// 2. 해당 문자를 소수 판별 =>
function solution(numbers) {
  let answer = new Set();
  numbers = numbers.split('');

  // 소수 판별
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 순열 문제
  const getPermutations = (list, fixed) => {
    if (list.length >= 1) {
      for (let i = 0; i < list.length; i++) {
        const newFixed = fixed + list[i];
        const newArr = [...list];
        newArr.splice(i, 1);

        if (isPrime(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }
        getPermutations(newArr, newFixed);
      }
    }
  };

  getPermutations(numbers, '');

  return answer.size;
}

// 준내 어렵다잉 이거는 함 다시 봐야될듯
