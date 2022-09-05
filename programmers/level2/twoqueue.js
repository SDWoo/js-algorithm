function solution(queue1, queue2) {
    let queue1Sum = getArraySum(queue1);
    let queue2Sum = getArraySum(queue2);
    
    let pointer1 = 0;
    let pointer2 = queue1.length;
    const target = (queue1Sum + queue2Sum) / 2
    const queue = [...queue1, ...queue2];
    
    
    const end = queue1.length * 3;
    
    for (let count = 0; count < end; count++) {
        if (queue1Sum === target) {
            return count;
        }
        
        if (queue1Sum  > target) {
            queue1Sum  -= queue[pointer1++];
        } else {
            queue1Sum  += queue[pointer2++];
        }
    }
    
    return -1;
    
}

const getArraySum = (arr) => {
    return arr.reduce((acc,cur) => acc+cur);
}