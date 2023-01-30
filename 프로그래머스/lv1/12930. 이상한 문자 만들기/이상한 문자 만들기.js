function solution(s) {
    const array = s.split(' ');
    return array.map(value => {
        return value.split('').map((value,index)=> {
            return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
        }).join('')
    }).join(' ')
}