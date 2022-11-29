function solution(skill, skill_trees) {
    let result = 0;
    skill_trees.forEach((tree, index) => {
        const temp = [];
        tree.split('').forEach((element) => {
            if(skill.indexOf(element) > -1 ){
                temp.push(element);
            }
        })
        skill_trees[index] = temp;
    })
    console.log(skill_trees);
    skill_trees.forEach((tree) => {
        let isOk = true;
        for (let i = 0; i < tree.length; i++) {
            if(skill.indexOf(tree[i]) !== i) {
                isOk = !isOk
                break;
            }    
        }
        // tree.forEach((value, index) => {
        //     if(skill.indexOf(value) !== index) {
        //         isOk = !isOk
        //         return false;
        //     }
        // })
        result = isOk ? result +1 : result;
    })
    
    return result;
}