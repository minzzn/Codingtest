let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let n = input[0];
let m = input[1];
function solution(n, m) {
  // 순열을 계산하고자 하는 원소가 담긴 배열 [1, 2, 3, 4]
  let arr = Array.from({ length: n }, (v, i) => i + 1);
  // 각 원소의 인덱스 별 방문 여부
  let visited = new Array(n).fill(false);
  // 현재 순열에 포함된 원소
  let selected = [];

  let answer = "";
  function dfs(arr, depth) {
    // 모든 순열을 확인하는 부분
    if (depth === m) {
      let result = []; // 순열 결과 저장
      for (let i of selected) result.push(arr[i]);
      for (let x of result) answer += x + " ";
      answer += "\n"; // 줄바꿈 처리
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue; // 이미 처리된 원소라면 무시하고 넘어감
      selected.push(i); // 현재 원소 선택
      visited[i] = true; // 방문처리
      dfs(arr, depth + 1); // 재귀함수 호출
      selected.pop(); // 현재 원소 선택 취소
      visited[i] = false; // 원소 방문 처리 취소
    }
  }
  dfs(arr, 0);
  return answer;
}

console.log(solution(n, m));