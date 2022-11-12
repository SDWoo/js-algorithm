function solution(common) {
    const gap = common[1]-common[0];
    const div = common[1]/common[0];
    if(gap === common[2] - common[1]) {
        return common[common.length-1] + gap
    }else {
        return common[common.length-1] * div
    }
}