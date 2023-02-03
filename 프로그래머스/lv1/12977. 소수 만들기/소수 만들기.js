// 순서대로 하는 경우, 전체를 다 돌려면 ?
// sort 한번 진행
// 처음 인덱스
/*
0 1 2 
0 1 3
0 1 ... length-1
0 2 length-1
0 length - 2 length-1
1 length - 2 length-1
 length - 1이 되면 second += 1 하고, 
*/


function solution(nums) {
    let answer = 0;
    let sieve = new Array(3001).fill(true);
    for (let i = 2; i * i < sieve.length; i += 1) {
        if (!sieve[i]) continue;
        for (let j = i + i; j < sieve.length; j += i) {
            sieve[j] = false;
        }
    }
    for(let i = 0; i< nums.length -2; i += 1) {
        for(let j = i+1; j < nums.length-1; j+= 1) {
            for(let k = j+1; k < nums.length ; k += 1) {
                if(sieve[nums[i] + nums[j] + nums[k]]) answer += 1;
            }
        }
    }
    return answer
}

