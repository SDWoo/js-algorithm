function solution(nums) {
  const setLength = [...new Set(nums)].length;
  return setLength > nums.length / 2 ? nums.length / 2 : setLength;
}
