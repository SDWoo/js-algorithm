function solution(today, terms, privacies) {
    const answer = [];
    const termsMap = new Map();
    const [todayYear, todayMonth, todayDay] = today.split('.').map(num => Number(num));
    terms.forEach((array) => {
        const term = array.split(' ');
        termsMap.set(term[0], Number(term[1]));
    })
    
    
    privacies.forEach((privacy, index) => {
        let [date, alphabet] = privacy.split(' ');
        let [year, month, day]= date.split('.').map(num => Number(num));
        month += termsMap.get(alphabet);
        if(month > 12) {
            let plusYear = month%12 === 0 ? Math.floor(month / 12) - 1: Math.floor(month / 12);
            year += plusYear;
            month -= 12* plusYear;
        }
        
        if(todayYear < year) return;
        else if(todayYear > year) {
            answer.push(index+1);
            return;
        }
        else {
            if(todayMonth < month) return;
            else if (todayMonth > month) {
                answer.push(index+1);
                return;
            }
            else {
                if(todayDay < day) return;
                else {
                    answer.push(index+1);
                    return;
                }
            }
        }
        
    })
    
    
    return answer;
}