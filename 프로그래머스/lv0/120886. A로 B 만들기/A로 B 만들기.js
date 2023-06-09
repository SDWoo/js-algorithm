function solution(before, after) {
    return getSortedString(before) === getSortedString(after) ?
        1 : 0
}

const getSortedString = (str) => {
    return str.split('').sort().join();
}