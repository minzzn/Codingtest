let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let n = input[0];
let m = input[1];

function solution(n, m) {
  let arr = Array.from({ length: n }, (v, i) => i + 1);
  let visited = new Array(n).fill(false);
  let answer = "";

  function dfs(arr, depth, currentPermutation) {
    if (depth === m) {
      answer += currentPermutation.join(" ") + "\n";
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(arr, depth + 1, currentPermutation.concat(arr[i]));
      visited[i] = false;
    }
  }

  dfs(arr, 0, []);
  return answer;
}

console.log(solution(n, m));