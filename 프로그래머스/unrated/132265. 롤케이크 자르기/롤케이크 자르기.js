function solution(topping) {
    let result = 0;
    const older = new Set();
    const younger = new Map();
    topping.forEach((value,index)=> {
        younger.set(value, younger.get(value) ? younger.get(value) + 1 : 1);       
    })

    topping.forEach((value,index) => {
        let youngerValue = younger.get(value);
        youngerValue === 1 ? younger.delete(value) : younger.set(value, youngerValue-1)
        older.add(value);
        if(older.size === younger.size) result += 1;
    })
    
    return result
}