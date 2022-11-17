// 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치하면 회원가입

function solution(want, number, discount) {
    let result = 0;
    
    for(let i = 0; i<=discount.length-10; i+= 1) {
        let numberCopy = [...number];
        for(let j = i; j<i+10; j += 1){
            let wantIndex = want.indexOf(discount[j]);
            if(wantIndex< 0) {
                break;
            }
            numberCopy[wantIndex] -= 1;
        }
        result = Math.max(...numberCopy) === 0 ? result + 1 : result;
    }
    
    
    return result;
    
}