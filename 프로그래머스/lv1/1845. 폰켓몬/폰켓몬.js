function solution(nums) {
    return Math.min([...new Set(nums)].length , nums.length/2);
}