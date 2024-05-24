let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(Number);
// 문자열을 줄바꿈 기준으로 받고 숫자로 변환

arr.shift();
// n개의 input을 숫자배열로 변환 후 오름차순으로 정렬
arr.sort((a, b) => a - b);
for(let i in arr){
    console.log(arr[i]);
}