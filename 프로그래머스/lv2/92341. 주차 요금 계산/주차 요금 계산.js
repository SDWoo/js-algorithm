function solution(fees, records) {
    // 기본 시간, 기본 요금, 단위 시간, 단위 요금
    const [defaultTime, initialFee, timegap, fee] = fees;
    const result = [];
    const CarMap = new Map();
    const InMap = new Map();
    const TimeMap = new Map();
    records.forEach(record => {
        const [time, number, InOut] = record.split(' ')    
        if(InOut === 'IN') {
            InMap.set(number, time);
        }else {
            let subTime = getTime(InMap.get(number), time);
            TimeMap.set(number, TimeMap.get(number) ? TimeMap.get(number) + subTime : subTime);
            InMap.delete(number);
        }
    })
    
    const array = InMap.keys() ? [...InMap.keys()] : [];
    
    array && [...InMap.keys()].forEach((number) => {
        let time = getTime(InMap.get(number));
        TimeMap.set(number, TimeMap.get(number) ? TimeMap.get(number) + time : time);
    });
    
    const TimeArray = [...TimeMap.entries()].sort((a,b) => a[0] - b[0]);
    
    TimeArray.forEach((car) => {
        car[1] < defaultTime ?
            result.push(initialFee) :
            result.push(initialFee + Math.ceil((car[1]- defaultTime)/ timegap) * fee);
    })
    return result;
}

const getTime = ( InTime, currentTime = "23:59") => {
    const [currentHour, currentMinute] = currentTime.split(':');
    const [hour, minute] = InTime.split(':');
    let curTime = +currentHour * 60 + +currentMinute;
    let inTime = +hour * 60 + +minute;
    return curTime - inTime;
}