function solution(name) {
    // 위로 or 아래로의 min을 구해서 해당 횟수 더하기
    // A를 만나면 해당 반대쪽으로 갈 수 있나 확인
    const length = name.length;
    let upDown = 0;
    let leftRight = length -1;
    const alphabet = Array.from({length: 26}, (v, i) => String.fromCharCode(i+65));
    name.split('').forEach((char) => {
        const target = alphabet.indexOf(char);
        upDown += Math.min(target, 26 - target)
    });
    
    let Aindex = 0;
    for(let i = 0; i<length; i += 1) {
        Aindex = i;
        while(name.at(Aindex) == "A"){
            Aindex+=1;
        }

        // 앞으로 가는 경우
        if(i === 0)
            leftRight = Math.min(length-Aindex, leftRight);
        else
            leftRight = Math.min(2*(i-1) + length-Aindex, leftRight);

        // 처음부터 뒤로 가는 경우
        if(i === 0)
            leftRight = Math.min(leftRight, length-Aindex);
        else
            leftRight = Math.min(leftRight, i-1 + (length-Aindex)*2);
    }
    
    return upDown + leftRight;
}