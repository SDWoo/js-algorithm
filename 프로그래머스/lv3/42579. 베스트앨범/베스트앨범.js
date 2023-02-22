function solution(genres, plays) {
    let answer = [];
    const array = [];
    
    genres.forEach((genre, index) => {
        array.push({
            index: index,
            genre: genre,
            play: plays[index]
        })
    })
    
    const genreList = [...new Set(genres)];
    
    // 여기서 더 많이 플레이된 장르 계산 및 정렬
    const morePlayedGenre = [];
    genreList.forEach((genre) => {
        let total = array.filter((obj) => obj.genre === genre).reduce((acc,cur)=> acc += cur.play, 0);
        morePlayedGenre.push({
            genre: genre,
            total: total
        })
    })
    morePlayedGenre.sort((a,b)=> b.total - a.total);
    
    
    // 여기서 해당 장르 정렬해서 인덱스 answer에 push
    morePlayedGenre.forEach(({genre}) => {
        const genreIndex = array.filter((obj) => obj.genre ===genre)
            .sort((a,b) => {
                if(b.play === a.play) return a.index - b.index
                return b.play - a.play
            })
            .map(({index})=> index);
        
        let limit = genreIndex.length > 1 ? 2 : genreIndex.length;
        for(let i = 0; i < limit; i += 1) {
            answer.push(genreIndex[i]);
        }
    })
    
    return answer;
}