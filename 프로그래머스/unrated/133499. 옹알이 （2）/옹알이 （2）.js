function solution(babbling) {
    const list = ['ma','woo','ye','aya'];
    let result = 0;
    
    // 받아온 배열의 value를 하나씩 검사
    // 일단 옹알이 리스트에 있는 것들로 이루어진다 => result + 1;
    // 옹알이 리스트 하나씩 검사. 
    babbling.forEach((value) => {
        let i = 0;
        let count = 0;
        
        list.forEach((item) => {
            const matchValue = value.match(new RegExp(item, 'gi'));
            if(value.includes(item + item)) {
               i = list.length;
            }
            
            if(matchValue) {
                count += matchValue.length;

            }
            
        })
        
        while(i < list.length) {

            
            if(value.includes(list[i])) {
                value = value.replace(list[i],'')
                count -= 1;
            }else i +=1;
            
            
            if(value.length === 0 && count === 0) {
                result += 1;
                i = list.length;
                return;
            }
        }
    })
    
    return result;
}