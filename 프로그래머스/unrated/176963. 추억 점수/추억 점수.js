function solution(name, yearning, photo) {
    const map = new Map();
    name.forEach((value, index) => {
        map.set(value, yearning[index]);
    })
    
    return photo.map((array) => {
        let score = 0;
        array.forEach((name) => {
            score += map.get(name) ? map.get(name) : 0;
        })
        return score;
    })
}