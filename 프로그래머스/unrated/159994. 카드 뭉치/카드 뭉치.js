function solution(cards1, cards2, goal) {
    let cards1Index = 0;
    let cards2Index = 0;
    for(let i = 0; i < goal.length; i+=1) {
        let card = goal[i];
        if(cards1[cards1Index] === card) cards1Index++;
        else {
            if(cards2[cards2Index] === card) cards2Index++;
            else return "No"
        }
    }
    return "Yes"
}