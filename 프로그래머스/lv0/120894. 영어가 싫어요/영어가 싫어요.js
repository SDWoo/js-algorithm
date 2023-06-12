function solution(numbers) {
    let answer  = '';
    while(numbers.length > 0) {
        const num = numbers.slice(0,3);
        switch(num) {
            case 'zer': {
                numbers = numbers.substring(4);
                answer += '0';
                break;
            }
            case 'one': {
                numbers = numbers.substring(3);
                answer += '1';
                break;
            }
            case 'two': {
                numbers = numbers.substring(3);
                answer += '2';
                break;
            }
            case 'thr': {
                numbers = numbers.substring(5);
                answer += '3';
                break;
            }
            case 'fou': {
                numbers = numbers.substring(4);
                answer += '4';
                break;
            }
            case 'fiv': {
                numbers = numbers.substring(4);
                answer += '5';
                break;
            }
            case 'six': {
                numbers = numbers.substring(3);
                answer += '6';
                break;
            }
            case 'sev': {
                numbers = numbers.substring(5);
                answer += '7';
                break;
            }
            case 'eig': {
                numbers = numbers.substring(5);
                answer += '8';
                break;
            }
            case 'nin': {
                numbers = numbers.substring(4);
                answer += '9';
                break;
            }
            default: {
                break;
            }
        }
    }
    return Number(answer);
}