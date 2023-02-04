// 
function solution(n, arr1, arr2) {
    const answer = [];
    
    arr1.forEach((val, idx) => {
        let line = '';
        let val2 = arr2[idx].toString(2).padStart(n,'0');
        val.toString(2).padStart(n,'0').split('').forEach((num,index) => {
            line += num === '1' || val2[index] === '1' ? '#' : ' ';
        })
        answer.push(line);
    })
    return answer;
}