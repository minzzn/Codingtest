let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = parseInt(input.shift());

let result = [];

input = input.map(row => row.split(" ").map(Number));
input.sort((a, b) => a[0] - b[0]);
let upd = [input[0][0], input[0][0]];
for (let i = 0; i < input.length; i++) {
    if (upd[1] < input[i][0]) { // 안겹치는 경우
        result.push([upd[0], upd[1]]);
        upd[0] = input[i][0]
        upd[1] = input[i][0]
    }
    if(upd[1] < input[i][1]) {
        upd[1] = input[i][1]
    }
}

result.push([upd[0], upd[1]]);

let sum = 0;

for (let i = 0; i < result.length; i++) {
    sum += (result[i][1] - result[i][0]);
}

console.log(sum);
