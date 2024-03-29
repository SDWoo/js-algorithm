function solution(babbling) {
    const list = ['ma','woo','ye','aya'];
    let result = 0;
    
    babbling.forEach((value) => {
        let i = 0;
        let count = 0;
        
        list.forEach((item) => {
            const matchValue = value.match(new RegExp(item, 'gi'));
            if(value.includes(item + item)) {
               i = list.length;
            }
            
            count = matchValue? count + matchValue.length : count;
            
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