// 순열로 풀어보려 했으나 테스트케이스 반점 맞음 57점. 문제가 뭔질 모르겟다.
function solution(k, dungeons) {
  let maxDungeons = 0;
  let index = 0;

  const permutationDungeons = (arr, fixed, piro) => {
    if (piro > 0) {
      maxDungeons = Math.max(maxDungeons, fixed);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > piro) {
          break;
        }
        let newFixed = fixed + 1;
        const newArr = [...arr];
        newArr.splice(i, 1);
        const newK = piro - arr[i][1];
        permutationDungeons(newArr, newFixed, newK);
      }
    }
  };

  permutationDungeons(dungeons, 0, k);

  return maxDungeons;
}

// 좋은 방법 => dfs로 모든 경우의 수를 풀랜다. visited라는 배열을 두고 거기를 확인해라

function solution(k, dungeons) {
  let visited = new Array(dungeons.length).fill(false);
  let maxDungeons = 0;

  const dfs = (k, count) => {
    maxDungeons = Math.max(maxDungeons, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [minK, useK] = dungeons[i];

      if (k >= minK && !visited[i]) {
        visited[i] = true;
        dfs(k - useK, count + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return maxDungeons;
}

// 시간은 오래 걸렷지만 이해는 잘감.
// visited라는 배열을 두고, dfs를 돌리면서 다 끝나면 false로 바꾼다.
// 그냥 확인만 하면 끝인 작업 진짜 쉽게 풆린다.
